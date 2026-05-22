const Course = require('../models/Course');
const User = require('../models/User');

const getTeacherStats = async (req, res) => {
    try {
        const instructorId = req.user.id;
        
        if (req.user.role !== 'teacher') {
            return res.status(403).json({ message: "Only teachers can access stats" });
        }

        const courses = await Course.find({ instructor: instructorId });
        
        const totalCourses = courses.length;
        const totalStudents = courses.reduce((acc, course) => acc + course.studentsEnrolled.length, 0);
        
        // As a placeholder for average rating (if ratings are added later), returning 0 or mock data
        const averageRating = 4.5; // Mock data for now, as rating model doesn't exist

        res.status(200).json({
            totalCourses,
            totalStudents,
            averageRating
        });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong fetching stats" });
    }
};

module.exports = { getTeacherStats };
