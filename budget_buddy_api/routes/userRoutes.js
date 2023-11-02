const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     description: Get all users
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/', UserController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by id
 *     description: Get user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: User id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/:id', UserController.getUserById);

/**
 * @swagger
 * /api/users/email/{email}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by email
 *     description: Get user by email
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: User email
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/email/:email', UserController.getUserByEmail);

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create user
 *     description: Create user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               loginMethod:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               photoURL:
 *                 type: string
 *               dateJoined:
 *                 type: string
 *               lastLogin:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *             required:
 *               - name
 *               - email
 *               - loginMethod
 *               - phoneNumber
 *               - photoURL
 *               - dateJoined
 *               - lastLogin
 *               - isActive
 *     responses:
 *       '200':
 *         description: Success
 */
router.post('/', UserController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put: 
 *     tags:
 *       - Users
 *     summary: Update user
 *     description: Update user
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: User id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               loginMethod:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               photoURL:
 *                 type: string
 *               dateJoined:
 *                 type: string
 *               lastLogin:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *             required:
 *               - name
 *               - email
 *               - loginMethod
 *               - phoneNumber
 *               - photoURL
 *               - dateJoined
 *               - lastLogin
 *               - isActive
 *     responses:
 *       '200':
 *         description: Success
 */
router.put('/:id', UserController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete user
 *     description: Delete user
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: User id
 *     responses:
 *       '200':
 *         description: Success
 */
router.delete('/:id', UserController.deleteUser);

module.exports = router;