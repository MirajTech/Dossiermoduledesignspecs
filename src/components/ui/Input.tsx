import { LucideIcon } from 'lucide-react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: LucideIcon;
  className?: string;
}

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon: Icon,
  className = ''
}: InputProps) {
  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#64748B]" />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`
          h-10 w-full rounded-md border border-[#E2E8F0] px-3
          focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent
          ${Icon ? 'pl-10' : 'pl-3'}
        `}
      />
    </div>
  );
}
