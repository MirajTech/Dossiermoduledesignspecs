import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'validation' | 'destructive' | 'outline' | 'ghost' | 'view' | 'send';
  size?: 'default' | 'sm' | 'icon';
  icon?: LucideIcon;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-[#1E293B] text-white hover:opacity-90',
  validation: 'bg-[#F97316] text-white hover:opacity-90',
  destructive: 'bg-[#EF4444] text-white hover:opacity-90',
  outline: 'bg-transparent text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F1F5F9]',
  ghost: 'bg-transparent text-[#0F172A] hover:bg-[#F1F5F9]',
  view: 'bg-[#3B82F6] text-white hover:bg-[#2563EB]',
  send: 'bg-[#22C55E] text-white hover:bg-[#16A34A]'
};

const sizeStyles = {
  default: 'h-10 px-4',
  sm: 'h-9 px-3',
  icon: 'h-10 w-10 p-0'
};

export function Button({
  variant = 'primary',
  size = 'default',
  icon: Icon,
  children,
  onClick,
  className = '',
  disabled = false
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg
        transition-all font-medium
        active:scale-98
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}