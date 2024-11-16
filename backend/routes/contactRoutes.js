const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getContacts); // List all contacts
router.post('/', contactController.createContact); // Create a new contact
router.get('/:id', contactController.getContactById); // Get a contact by ID
router.put('/:id', contactController.updateContact); // Update a contact by ID
router.delete('/:id', contactController.deleteContact); // Delete a contact by ID

module.exports = router;
