const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

/**
 * @swagger
 * /api/accounts:
 *   get:
 *     tags:
 *       - Accounts
 *     summary: Get all accounts
 *     description: Get all accounts
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/', accountController.getAllAccounts);

/**
 * @swagger
 * /api/accounts/{id}:
 *   get:
 *     tags:
 *       - Accounts
 *     summary: Get account by id
 *     description: Get account by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Account id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/:id', accountController.getAccountById);

/**
 * @swagger
 * /api/accounts/user/{userID}:
 *   get:
 *     tags:
 *       - Accounts
 *     summary: Get account by user id
 *     description: Get account by user id
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: GUID
 *         required: true
 *         description: User id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/user/:userID', accountController.getAccountByUserID);

/**
 * @swagger
 * /api/accounts/account-type/{accountTypeID}:
 *   get:
 *     tags:
 *       - Accounts
 *     summary: Get account by account type id
 *     description: Get account by account type id
 *     parameters:
 *       - in: path
 *         name: accountTypeID
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Account type id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/account-type/:accountTypeID', accountController.getAccountByAccountTypeID);

/**
 * @swagger
 * /api/accounts:
 *   post:
 *     tags:
 *       - Accounts
 *     summary: Create account
 *     description: Create account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       '200':
 *         description: Success
 */
router.post('/', accountController.createAccount);

/**
 * @swagger
 * /api/accounts/{id}:
 *   put:
 *     tags:
 *       - Accounts
 *     summary: Update account
 *     description: Update account
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Account id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       '200':
 *         description: Success
 */
router.put('/:id', accountController.updateAccount);

/**
 * @swagger
 * /api/accounts/{id}:
 *   delete:
 *     tags:
 *       - Accounts
 *     summary: Delete account
 *     description: Delete account
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Account id
 *     responses:
 *       '200':
 *         description: Success
 */
router.delete('/:id', accountController.deleteAccount);

module.exports = router;