import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function StatsCard({ title, value, icon: Icon, description, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 card-shadow hover:card-shadow-hover transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-[#64748B]">{title}</p>
          <h3 className="mt-2">{value}</h3>
          {description && (
            <small className="text-[#64748B] mt-1">{description}</small>
          )}
        </div>
        <div className="w-12 h-12 rounded-lg bg-[#FFF7ED] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#F97316]" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
          <span className={`${trend.positive ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
            {trend.value}
          </span>
          <small className="text-[#64748B] ml-2">vs. mois précédent</small>
        </div>
      )}
    </div>
  );
}
