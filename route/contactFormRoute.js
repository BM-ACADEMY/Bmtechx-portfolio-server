const express = require('express');
const router = express.Router();
const contactFormController = require('../controller/contactFormController');

// Routes
router.post('/create-contact-form', contactFormController.createContactForm);
router.get('/fetch-all-form', contactFormController.getAllContactForm);
router.get('/fetch-form-by-id/:id', contactFormController.getContactFormById);
router.put('/update-contact-form/:id', contactFormController.updateContactForm);
router.delete('/delete-contact-form/:id', contactFormController.deleteContactForm);

module.exports = router;
