import { useTheme } from '../../contexts/ThemeContext';

const TONES = {
  indigo: {
    icon: 'text-indigo-500',
    ring: 'bg-indigo-50 dark:bg-indigo-500/15',
  },
  sky: {
    icon: 'text-sky-500',
    ring: 'bg-sky-50 dark:bg-sky-500/15',
  },
  emerald: {
    icon: 'text-emerald-500',
    ring: 'bg-emerald-50 dark:bg-emerald-500/15',
  },
  amber: {
    icon: 'text-amber-500',
    ring: 'bg-amber-50 dark:bg-amber-500/15',
  },
  rose: {
    icon: 'text-rose-500',
    ring: 'bg-rose-50 dark:bg-rose-500/15',
  },
};

export default function StatCard({ icon: Icon, label, value, hint, tone = 'indigo' }) {
  const { isDark } = useTheme();
  const styles = TONES[tone] || TONES.indigo;
  return (
    <div className={`rounded-2xl p-5 shadow-sm ${isDark ? 'border border-slate-700/60 bg-slate-900/70' : 'border border-sky-200/70 bg-white/70'}`}>
      <div className="flex items-center gap-4">
        <div className={`rounded-2xl p-3 ${styles.ring}`}>
          <Icon size={22} className={styles.icon} />
        </div>
        <div>
          <p className="text-sm text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>{label}</p>
          <p className="text-3xl font-semibold text-primary">{value}</p>
          {hint && <p className="mt-1 text-xs text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>{hint}</p>}
        </div>
      </div>
    </div>
  );
}
