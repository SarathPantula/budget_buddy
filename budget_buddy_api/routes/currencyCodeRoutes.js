const express = require('express');
const currencyCodeController = require('../controllers/currencyCodeController');

const router = express.Router();

/**
 * @swagger
 * /api/currency-codes:
 *   get:
 *     tags:
 *       - Currency Codes
 *     summary: Get all currency codes
 *     description: Get all currency codes
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/', currencyCodeController.getAllCurrencyCodes);

/**
 * @swagger
 * /api/currency-codes/{id}:
 *   get:
 *     tags:
 *       - Currency Codes
 *     summary: Get currency code by id
 *     description: Get currency code by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Currency code id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/:id', currencyCodeController.getCurrencyCodeById);

/**
 * @swagger
 * /api/currency-codes:
 *   post:
 *     tags:
 *       - Currency Codes
 *     summary: Create currency code
 *     description: Create currency code
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currencyCode:
 *                 type: string
 *               name:
 *                 type: string
 *             required:
 *               - currencyCode
 *               - name
 *     responses:
 *       '200':
 *         description: Success
 */
router.post('/', currencyCodeController.createCurrencyCode);

/**
 * @swagger
 * /api/currency-codes/{id}:
 *   put:
 *     tags:
 *       - Currency Codes
 *     summary: Update currency code
 *     description: Update currency code
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Currency code id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currencyCode:
 *                 type: string
 *               name:
 *                 type: string
 *             required:
 *               - currencyCode
 *               - name
 *     responses:
 *       '200':
 *         description: Success
 */
router.put('/:id', currencyCodeController.updateCurrencyCode);

/**
 * @swagger
 * /api/currency-codes/{id}:
 *   delete:
 *     tags:
 *       - Currency Codes
 *     summary: Delete currency code
 *     description: Delete currency code
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Currency code id
 *     responses:
 *       '200':
 *         description: Success
 */
router.delete('/:id', currencyCodeController.deleteCurrencyCode);

module.exports = router;