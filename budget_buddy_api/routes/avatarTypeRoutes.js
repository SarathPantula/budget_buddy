const express = require('express');

const {
    getAllAvatarTypes,
    getAvatarTypeById,
    getAvatarTypeByName,
    createAvatarType,
    updateAvatarType,
    deleteAvatarType
} = require('./controllers/avatarTypeController');

const router = express.Router();

router.get('/', getAllAvatarTypes);
router.get('/:id', getAvatarTypeById);
router.get('/:name', getAvatarTypeByName);
router.post('/', createAvatarType);
router.put('/:id', updateAvatarType);
router.delete('/:id', deleteAvatarType);

module.exports = router;