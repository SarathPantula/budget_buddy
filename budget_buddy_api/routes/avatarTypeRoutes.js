const express = require('express');
const AvatarTypeController = require('../controllers/avatarTypeController');

const router = express.Router();

/**
 * @swagger
 * /api/avatar-types:
 *  get:
 *    tags:
 *      - AvatarType
 *    summary: Get all avatar types
 *    description: Get all avatar types
 *    responses:
 *      '200':
 *        description: Success
 */
router.get('/', AvatarTypeController.getAllAvatarTypes);

/**
 * @swagger
 * /api/avatar-types/{id}:
 *  get:
 *    tags:
 *      - AvatarType
 *    summary: Get avatar type by id
 *    description: Get avatar type by id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: GUID
 *        required: true
 *        description: Avatar type id
 *    responses:
 *      '200':
 *        description: Success
 */
router.get('/:id', AvatarTypeController.getAvatarTypeById);

/**
 * @swagger
 * /api/avatar-types:
 *  post:
 *    tags:
 *      - AvatarType
 *    summary: Create avatar type
 *    description: Create avatar type
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *            required:
 *              - name
 *    responses:
 *      '200':
 *        description: Success
 */
router.post('/', AvatarTypeController.createAvatarType);

/**
 * @swagger
 * /api/avatar-types/{id}:
 *  put:
 *    tags:
 *      - AvatarType
 *    summary: Update avatar type
 *    description: Update avatar type
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: GUID
 *        required: true
 *        description: Avatar type id
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *            required:
 *              - name
 *    responses:
 *      '200':
 *        description: Success
 */
router.put('/:id', AvatarTypeController.updateAvatarType);

/**
 * @swagger
 * /api/avatar-types/{id}:
 *  delete:
 *    tags:
 *      - AvatarType
 *    summary: Delete avatar type
 *    description: Delete avatar type
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: GUID
 *        required: true
 *        description: Avatar type id
 *    responses:
 *      '200':
 *        description: Success
 */
router.delete('/:id', AvatarTypeController.deleteAvatarType);

module.exports = router;