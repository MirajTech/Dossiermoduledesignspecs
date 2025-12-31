import { AlertCircle, ArrowDown, ArrowUp, Minus } from 'lucide-react';

interface PriorityBadgeProps {
  priorite: 'basse' | 'normale' | 'haute' | 'urgente';
}

const priorityConfig = {
  basse: {
    label: 'Basse',
    icon: ArrowDown,
    className: 'text-[#64748B]'
  },
  normale: {
    label: 'Normale',
    icon: Minus,
    className: 'text-[#64748B]'
  },
  haute: {
    label: 'Haute',
    icon: ArrowUp,
    className: 'text-[#F59E0B]'
  },
  urgente: {
    label: 'Urgente',
    icon: AlertCircle,
    className: 'text-[#EF4444]'
  }
};

export function PriorityBadge({ priorite }: PriorityBadgeProps) {
  const config = priorityConfig[priorite];
  const Icon = config.icon;

  return (
    <div className={`inline-flex items-center gap-1 ${config.className}`}>
      <Icon className="w-3.5 h-3.5" />
      <small>{config.label}</small>
    </div>
  );
}
