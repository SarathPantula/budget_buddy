const express = require('express');

const accountRoutes = require('./accountRoutes');
const avatarRoutes = require('./avatarRoutes');
const avatarTypeRoutes = require('./avatarTypeRoutes');
const userRoutes = require('./userRoutes');
const categoryTypeRoutes = require('./categoryTypeRoutes');

const router = express.Router();

router.use('/avatar-types', avatarTypeRoutes);
router.use('/users', userRoutes);
router.use('/avatars', avatarRoutes);
router.use('/accounts', accountRoutes);
router.use('/category-types', categoryTypeRoutes);

module.exports = router;