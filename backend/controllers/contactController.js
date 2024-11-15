const db = require('../config/db');

// Get all contacts
exports.getContacts = (req, res) => {
    const sql = 'SELECT * FROM contacts';
    db.query(sql, (err, results) => {
        if (err) 
            return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Add a new contact
exports.createContact = (req, res) => {
    const { first_name, last_name, email, phone, company, job_title } = req.body;
    const sql = 'INSERT INTO contacts (first_name, last_name, email, phone, company, job_title) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [first_name, last_name, email, phone, company, job_title], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...req.body });
    });
};

// Update an existing contact
exports.updateContact = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone, company, job_title } = req.body;
    const sql = 'UPDATE contacts SET first_name = ?, last_name = ?, email = ?, phone = ?, company = ?, job_title = ? WHERE id = ?';
    db.query(sql, [first_name, last_name, email, phone, company, job_title, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.sendStatus(200);
    });
};

// Delete a contact
exports.deleteContact = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM contacts WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.sendStatus(200);
    });
};
