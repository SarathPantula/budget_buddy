const categoryController = require('../controllers/categoryController');
const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Get all categories
 *     description: Get all categories
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/', categoryController.getAllCategories);

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Get category by id
 *     description: Get category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Category id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/:id', categoryController.getCategoryById);

/**
 * @swagger
 * /api/categories/user/{userId}:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Get categories by user id
 *     description: Get categories by user id
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: GUID
 *         required: true
 *         description: User id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/user/:userId', categoryController.getCategoryByUserId);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     tags:
 *       - Categories
 *     summary: Create category
 *     description: Create category
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     required:
 *       - name
 *     responses:
 *       '200':
 *         description: Success
 */
router.post('/', categoryController.createCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     tags:
 *       - Categories
 *     summary: Update category
 *     description: Update category
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Category id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     required:
 *       - name
 *     responses:
 *       '200':
 *         description: Success
 */
router.put('/:id', categoryController.updateCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     tags:
 *       - Categories
 *     summary: Delete category
 *     description: Delete category
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Category id
 *     responses:
 *       '200':
 *         description: Success
 */
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;