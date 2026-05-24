import { AnimatePresence, motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, LayoutDashboard, Sparkles, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

export default function Sidebar({ open, onClose }) {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const location = useLocation();

  const items = [
    { to: '/', label: 'Overview', icon: Sparkles },
    { to: '/courses', label: 'Courses', icon: BookOpen },
    { to: '/dashboard', label: 'Student Dashboard', icon: LayoutDashboard },
    { to: '/certificates', label: 'Certificates', icon: Award, role: 'student' },
    { to: '/teacher-dashboard', label: 'Teacher Studio', icon: GraduationCap, role: 'teacher' },
    { to: '/profile', label: 'Profile', icon: User },
  ];

  const navItems = items.filter((item) => !item.role || user?.role === item.role);

  const NavLink = ({ to, icon: Icon, label, onClick }) => {
    const active = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
          active
            ? 'bg-white text-slate-900 shadow-lg shadow-slate-900/10 dark:bg-slate-900 dark:text-white'
            : 'text-secondary hover:bg-sky-50/80 hover:text-primary dark:hover:bg-slate-800/70 dark:hover:text-white'
        }`}
      >
        <Icon size={18} />
        {label}
      </Link>
    );
  };

  return (
    <>
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-full lg:block">
        <div className="surface flex h-full flex-col rounded-3xl p-5">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-subtle">Workspace</p>
            <p className="mt-2 text-lg font-semibold text-ink">Learnify Studio</p>
          </div>
          <nav className="flex flex-1 flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
          </nav>
          <div className={`mt-6 rounded-2xl border p-4 text-xs text-muted shadow-sm ${isDark ? 'border-slate-700/60 bg-slate-900/70' : 'border-sky-200/70 bg-white/70'}`}>
            <p className="font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>Upgrade learning</p>
            <p className="mt-1 text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>Unlock premium analytics, cohorts, and live workshops.</p>
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/10 dark:bg-slate-900/40 backdrop-blur-sm"
              onClick={onClose}
              role="presentation"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative h-full w-72 surface p-5"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-subtle">Workspace</p>
                  <p className="mt-2 text-lg font-semibold text-ink">Learnify Studio</p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-2xl border border-sky-200/70 p-2 text-secondary transition hover:text-primary dark:border-slate-700/60 dark:hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink key={item.to} {...item} onClick={onClose} />
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
