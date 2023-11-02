const express = require('express');
const AvatarTypeController = require('../controllers/avatarTypeController');

const router = express.Router();

router.get('/', AvatarTypeController.getAllAvatarTypes);
router.get('/:id', AvatarTypeController.getAvatarTypeById);
router.post('/', AvatarTypeController.createAvatarType);
router.put('/:id', AvatarTypeController.updateAvatarType);
router.delete('/:id', AvatarTypeController.deleteAvatarType);

module.exports = router;