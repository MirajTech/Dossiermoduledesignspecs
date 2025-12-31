import { Calendar, Car, Phone, User, ChevronRight } from 'lucide-react';
import { Dossier } from '../types/dossier';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';

interface DossierMobileCardProps {
  dossier: Dossier;
  onClick: () => void;
}

export function DossierMobileCard({ dossier, onClick }: DossierMobileCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-4 card-shadow border border-[#E2E8F0] active:scale-98 transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <p className="font-mono text-[#3B82F6] mb-1">{dossier.numero}</p>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={dossier.status} />
            <PriorityBadge priorite={dossier.priorite} />
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#64748B]" />
      </div>

      {/* Client Info */}
      <div className="space-y-2 mb-3 pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-[#64748B]" />
          <p>{dossier.client.nom}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#64748B]" />
          <small className="text-[#64748B]">{dossier.client.telephone}</small>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="flex items-center gap-2 mb-3">
        <Car className="w-4 h-4 text-[#64748B]" />
        <div>
          <p className="font-mono">{dossier.vehicule.immatriculation}</p>
          <small className="text-[#64748B]">
            {dossier.vehicule.marque} {dossier.vehicule.modele}
          </small>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#64748B]" />
          <small className="text-[#64748B]">{formatDate(dossier.dateMiseAJour)}</small>
        </div>
        {dossier.montantEstime && (
          <p className="text-[#F97316]">{formatCurrency(dossier.montantEstime)}</p>
        )}
      </div>
    </div>
  );
}
