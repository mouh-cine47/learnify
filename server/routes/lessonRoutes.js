const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { completeLesson } = require('../controllers/lesson');

router.patch('/:id/complete', verifyToken, completeLesson);

module.exports = router;
