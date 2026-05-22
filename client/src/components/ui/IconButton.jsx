export default function IconButton({ icon: Icon, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-200/70 bg-sky-50/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300/80 hover:text-slate-900 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-white ${className}`}
    >
      <Icon size={18} />
    </button>
  );
}
