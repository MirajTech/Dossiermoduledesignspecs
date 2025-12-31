import { ReactNode } from 'react';

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  activeValue: string;
  onClick: (value: string) => void;
}

interface TabsContentProps {
  value: string;
  activeValue: string;
  children: ReactNode;
}

export function Tabs({ value, onValueChange, children, className = '' }: TabsProps) {
  return (
    <div className={className}>
      {typeof children === 'function' ? children({ value, onValueChange }) : children}
    </div>
  );
}

export function TabsList({ children, className = '' }: TabsListProps) {
  return (
    <div className={`inline-flex bg-[#F1F5F9] rounded-lg p-1 gap-1 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, activeValue, onClick }: TabsTriggerProps) {
  const isActive = value === activeValue;
  
  return (
    <button
      onClick={() => onClick(value)}
      className={`
        px-4 py-2 rounded-md transition-all
        ${isActive 
          ? 'bg-white text-[#0F172A] shadow-sm' 
          : 'bg-transparent text-[#64748B] hover:bg-[#E2E8F0]'
        }
      `}
    >
      <small style={{ fontWeight: 500 }}>{children}</small>
    </button>
  );
}

export function TabsContent({ value, activeValue, children }: TabsContentProps) {
  if (value !== activeValue) return null;
  
  return <div className="mt-6">{children}</div>;
}
