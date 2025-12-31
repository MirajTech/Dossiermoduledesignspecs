import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'custom';
  icon?: LucideIcon;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default',
  icon: Icon,
  bgColor,
  textColor,
  className = '' 
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1 rounded-full px-2 py-1';
  
  const defaultStyles = variant === 'default' 
    ? 'bg-[#F1F5F9] text-[#64748B]' 
    : '';

  const customStyles = variant === 'custom' && bgColor && textColor
    ? ''
    : '';

  return (
    <span 
      className={`${baseStyles} ${defaultStyles} ${className}`}
      style={variant === 'custom' ? { backgroundColor: bgColor, color: textColor } : undefined}
    >
      {Icon && <Icon className="w-3 h-3" />}
      <small style={{ fontWeight: 500 }}>{children}</small>
    </span>
  );
}
