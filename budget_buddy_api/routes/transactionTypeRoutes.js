const transactionTypeController = require('../controllers/transactionTypeController');
const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /api/transactionTypes:
 *   get:
 *     tags:
 *       - Transaction Types
 *     summary: Get all transaction types
 *     description: Get all transaction types
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/', transactionTypeController.getAllTransactionTypes);

/**
 * @swagger
 * /api/transactionTypes/{id}:
 *   get:
 *     tags:
 *       - Transaction Types
 *     summary: Get transaction type by id
 *     description: Get transaction type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Transaction type id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/:id', transactionTypeController.getTransactionTypeById);

/**
 * @swagger
 * /api/transactionTypes:
 *   post:
 *     tags:
 *       - Transaction Types
 *     summary: Create transaction type
 *     description: Create transaction type
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
router.post('/', transactionTypeController.createTransactionType);

/**
 * @swagger
 * /api/transactionTypes/{id}:
 *   put:
 *     tags:
 *       - Transaction Types
 *     summary: Update transaction type
 *     description: Update transaction type
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Transaction type id
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
router.put('/:id', transactionTypeController.updateTransactionType);

/**
 * @swagger
 * /api/transactionTypes/{id}:
 *   delete:
 *     tags:
 *       - Transaction Types
 *     summary: Delete transaction type
 *     description: Delete transaction type
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Transaction type id
 *     responses:
 *       '200':
 *         description: Success
 */
router.delete('/:id', transactionTypeController.deleteTransactionType);

module.exports = router;