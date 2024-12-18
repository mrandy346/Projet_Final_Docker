const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/**
 * @route   GET /users
 * @desc    Récupérer tous les utilisateurs
 * @access  Public
 */
router.get('/', usersController.getAllUsers);

/**
 * @route   POST /users
 * @desc    Créer un nouvel utilisateur
 * @access  Public
 */
router.post('/', usersController.createUser);

/**
 * @route   PUT /users/:id
 * @desc    Mettre à jour un utilisateur par son ID
 * @access  Public
 */
router.put('/:id', usersController.updateUser);

/**
 * @route   DELETE /users/:id
 * @desc    Supprimer un utilisateur par son ID
 * @access  Public
 */
router.delete('/:id', usersController.deleteUser);

module.exports = router;
