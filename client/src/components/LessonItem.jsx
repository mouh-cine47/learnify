import { CheckCircle2, Circle } from 'lucide-react';

export default function LessonItem({ lesson, isCompleted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer text-left border-0"
    >
      <div className="flex-shrink-0 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition">
        {isCompleted ? (
          <CheckCircle2 size={24} className="fill-current" />
        ) : (
          <Circle size={24} />
        )}
      </div>
      <div className="flex-grow">
        <h4 className="font-semibold text-gray-900 dark:text-white">{lesson.title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.duration}</p>
      </div>
      {isCompleted && <span className="text-green-600 dark:text-green-400 text-sm font-semibold">Completed</span>}
    </button>
  );
}
