import { LucideIcon } from 'lucide-react';

interface StatusStatsCardProps {
  label: string;
  count: number;
  icon: LucideIcon;
}

export function StatusStatsCard({ label, count, icon: Icon }: StatusStatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 card-shadow hover:card-shadow-hover transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <small className="text-[#64748B]">{label}</small>
          <h3 className="mt-1" style={{ fontSize: '32px', lineHeight: '1' }}>{count}</h3>
        </div>
        <div className="w-6 h-6">
          <Icon className="w-6 h-6 text-[#64748B]" />
        </div>
      </div>
    </div>
  );
}
