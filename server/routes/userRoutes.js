const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth'); 
const { getUserInfo, updateUserInfo, deleteUser, enrollCourse,enrollLesson, getAllCoursesOfInstructor,getAllCoursesEnrolled, updateUserProfile, getPublicProfile, changePassword } = require('../controllers/user');

router.get('/me', verifyToken, getUserInfo);
router.put('/me', verifyToken, updateUserInfo);
router.delete('/me', verifyToken, deleteUser);
router.post('/enroll-course/:courseId', verifyToken, enrollCourse);
router.post('/enroll-lesson/:lessonId', verifyToken, enrollLesson);
router.get('/teacher/courses', verifyToken, getAllCoursesOfInstructor);
router.get('/student/courses', verifyToken, getAllCoursesEnrolled);

// New endpoints
router.get('/me/courses', verifyToken, getAllCoursesEnrolled);
router.put('/profile', verifyToken, updateUserProfile);
router.put('/change-password', verifyToken, changePassword);
router.get('/:id/public', getPublicProfile);

module.exports = router;