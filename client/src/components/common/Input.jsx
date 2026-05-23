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
    <label className="block text-sm font-medium text-secondary">
      {label && <span>{label}</span>}
      <div className="relative mt-2">
        {Icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary">
            <Icon size={18} />
          </span>
        )}
        <Component
          {...props}
          type={isPassword ? (show ? 'text' : 'password') : props.type}
          className={`input text-primary placeholder:text-secondary ${Icon ? 'pl-11' : ''} ${isPassword ? 'pr-11' : ''} ${className}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            className="absolute -translate-y-1/2 right-4 top-1/2 text-secondary hover:text-primary"
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
