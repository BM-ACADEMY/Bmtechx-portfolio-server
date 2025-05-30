const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/create-user', userController.createUser);          // Create user
router.get('/fetch-all-user', userController.getUsers);   
router.post('/login', userController.loginUser);          // Get all users
router.get('/:id', userController.getUserById);       // Get user by ID
router.put('/:id', userController.updateUser);        // Update user
router.delete('/:id', userController.deleteUser);     // Delete user

module.exports = router;
