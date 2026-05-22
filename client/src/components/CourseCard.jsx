import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  const courseId = course._id || course.id;
  const instructorName = course.instructor?.name
    || (course.instructor?.firstName
      ? `${course.instructor.firstName} ${course.instructor.lastName}`
      : null);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden surface group rounded-3xl"
    >
      <div className="relative overflow-hidden h-44">
        {course.image ? (
          <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500">
            <BookOpen size={48} className="text-white/80" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        {course.category && (
          <span className="badge absolute left-4 top-4 bg-sky-50/90 text-slate-700">
            {course.category}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          {course.level && (
            <span className="badge bg-sky-100 text-sky-700 dark:bg-slate-800 dark:text-slate-300">
              {course.level}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
            {course.title}
          </h3>
          {course.description && (
            <p className="mt-2 text-sm text-muted line-clamp-2">
              {course.description}
            </p>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Users size={14} />
            {(course.studentsEnrolled?.length ?? course.students ?? 0).toLocaleString()} learners
          </span>
          {course.rating && (
            <span className="flex items-center gap-1">
              <Star size={14} className="text-amber-400" />
              {course.rating}
            </span>
          )}
        </div>

        {instructorName && (
          <p className="text-xs text-subtle">By {instructorName}</p>
        )}

        <Link
          to={`/course/${courseId}`}
          className="justify-center w-full btn btn-primary btn-md"
        >
          View course <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
