const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { getTeacherStats } = require('../controllers/teacher');

router.get('/stats', verifyToken, getTeacherStats);

module.exports = router;
