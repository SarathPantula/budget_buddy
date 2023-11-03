const express = require('express');
const CategoryTypeController = require('../controllers/categoryTypeController');

const router = express.Router();

/**
 * @swagger
 * /api/category-types:
 *   get:
 *     tags:
 *       - Category Types
 *     summary: Get all category types
 *     description: Get all category types
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/', CategoryTypeController.getAllCategoryTypes);

/**
 * @swagger
 * /api/category-types/{id}:
 *   get:
 *     tags:
 *       - Category Types
 *     summary: Get category type by id
 *     description: Get category type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Category type id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/:id', CategoryTypeController.getCategoryTypeById);

/**
 * @swagger
 * /api/category-types:
 *   post:
 *     tags:
 *       - Category Types
 *     summary: Create category type
 *     description: Create category type
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
router.post('/', CategoryTypeController.createCategoryType);

/**
 * @swagger
 * /api/category-types/{id}:
 *   put:
 *     tags:
 *       - Category Types
 *     summary: Update category type
 *     description: Update category type
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Category type id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Success
 */
router.put('/:id', CategoryTypeController.updateCategoryType);

/**
 * @swagger
 * /api/category-types/{id}:
 *   delete:
 *     tags:
 *       - Category Types
 *     summary: Delete category type
 *     description: Delete category type
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Category type id
 *     responses:
 *       '200':
 *         description: Success
 */
router.delete('/:id', CategoryTypeController.deleteCategoryType);

module.exports = router;