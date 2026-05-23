export default function SectionHeader({ title, subtitle, action, className = '' }) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
      <div>
        <h2 className="text-2xl font-semibold text-primary">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-sm text-secondary">{subtitle}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
