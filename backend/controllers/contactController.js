const db = require('../config/db');

exports.getContacts = (req, res) => {
    const sql = 'SELECT * FROM contacts';
    db.query(sql, (err, results) => {
        if (err) 
            return res.status(500).json({ error: err.message });
        res.json(results);
    });
};


exports.createContact = (req, res) => {
    const { first_name, last_name, email, phone, company, job_title } = req.body;
    const sql = 'INSERT INTO contacts (first_name, last_name, email, phone, company, job_title) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [first_name, last_name, email, phone, company, job_title], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...req.body });
    });
};


exports.updateContact = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone, company, job_title } = req.body;
    const sql = 'UPDATE contacts SET first_name = ?, last_name = ?, email = ?, phone = ?, company = ?, job_title = ? WHERE id = ?';
    db.query(sql, [first_name, last_name, email, phone, company, job_title, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: 'Contact updated successfully' });
    });
  };
  

exports.deleteContact = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM contacts WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.sendStatus(200);
    });
};


exports.getContactById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Contact not found" });
        }
        res.json(results[0]);
    });
};
