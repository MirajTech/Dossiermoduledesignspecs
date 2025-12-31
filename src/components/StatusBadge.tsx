import { DossierStatus } from '../types/dossier';

interface StatusBadgeProps {
  status: DossierStatus;
  className?: string;
}

const statusConfig: Record<DossierStatus, { label: string; bgColor: string; textColor: string }> = {
  ouvert: {
    label: 'Ouvert',
    bgColor: '#DBEAFE',
    textColor: '#1D4ED8'
  },
  en_cours: {
    label: 'En cours',
    bgColor: '#FEF3C7',
    textColor: '#B45309'
  },
  expertise: {
    label: 'Expertise',
    bgColor: '#F3E8FF',
    textColor: '#7E22CE'
  },
  devis: {
    label: 'Devis',
    bgColor: '#E0E7FF',
    textColor: '#4338CA'
  },
  reparation: {
    label: 'Réparation',
    bgColor: '#DCFCE7',
    textColor: '#15803D'
  },
  facturation: {
    label: 'Facturation',
    bgColor: '#CFFAFE',
    textColor: '#0E7490'
  },
  cloture: {
    label: 'Clôturé',
    bgColor: '#E5E7EB',
    textColor: '#4B5563'
  },
  archive: {
    label: 'Archivé',
    bgColor: '#F3F4F6',
    textColor: '#6B7280'
  }
};

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded ${className}`}
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '16px'
      }}
    >
      {config.label}
    </span>
  );
}
