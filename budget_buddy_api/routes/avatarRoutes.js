const express = require('express');
const AvatarController = require('../controllers/avatarController');

const router = express.Router();

/**
 * @swagger
 * /api/avatars:
 *   get:
 *     tags:
 *       - Avatars
 *     summary: Get all avatars
 *     description: Get all avatars
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/', AvatarController.getAllAvatars);

/**
 * @swagger
 * /api/avatars/{id}:
 *   get:
 *     tags:
 *       - Avatars
 *     summary: Get avatar by id
 *     description: Get avatar by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Avatar id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/:id', AvatarController.getAvatarById);

/**
 * @swagger
 * /api/avatars/avatar-type/{avatarTypeID}:
 *   get:
 *     tags:
 *       - Avatars
 *     summary: Get avatar by avatar type id
 *     description: Get avatar by avatar type id
 *     parameters:
 *       - in: path
 *         name: avatarTypeID
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Avatar type id
 *     responses:
 *       '200':
 *         description: Success
 */
router.get('/avatar-type/:avatarTypeID', AvatarController.getAvatarByTypeID);

/**
 * @swagger
 * /api/avatars:
 *   post:
 *     tags:
 *       - Avatars
 *     summary: Create avatar
 *     description: Create avatar
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               avatarTypeID:
 *                 type: GUID
 *               imageURL:
 *                 type: string
 *             required:
 *               - name
 *               - avatarTypeID
 *               - imageURL
 *     responses:
 *       '200':
 *         description: Success
 */
router.post('/', AvatarController.createAvatar);

/**
 * @swagger
 * /api/avatars/{id}:
 *   put:
 *     tags:
 *       - Avatars
 *     summary: Update avatar
 *     description: Update avatar
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Avatar id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               avatarTypeID:
 *                 type: GUID
 *               imageURL:
 *                 type: string
 *             required:
 *               - name
 *               - avatarTypeID
 *               - imageURL
 *     responses:
 *       '200':
 *         description: Success
 */
router.put('/:id', AvatarController.updateAvatar);

/**
 * @swagger
 * /api/avatars/{id}:
 *   delete:
 *     tags:
 *       - Avatars
 *     summary: Delete avatar
 *     description: Delete avatar
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: GUID
 *         required: true
 *         description: Avatar id
 *     responses:
 *       '200':
 *         description: Success
 */
router.delete('/:id', AvatarController.deleteAvatar);

module.exports = router;