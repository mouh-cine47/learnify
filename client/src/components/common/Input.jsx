import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function Input({
  label,
  icon: Icon,
  error,
  as = 'input',
  className = '',
  ...props
}) {
  const Component = as;
  const isPassword = props.type === 'password';
  const [show, setShow] = useState(false);

  return (
    <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">
      {label && <span>{label}</span>}
      <div className="relative mt-2">
        {Icon && (
          <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-slate-400">
            <Icon size={18} />
          </span>
        )}
        <Component
          {...props}
          type={isPassword ? (show ? 'text' : 'password') : props.type}
          className={`input ${Icon ? 'pl-11' : ''} ${isPassword ? 'pr-11' : ''} ${className}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            className="absolute -translate-y-1/2 right-4 top-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && <p className="mt-2 text-xs text-rose-500">{error}</p>}
    </label>
  );
}

export default Input;
