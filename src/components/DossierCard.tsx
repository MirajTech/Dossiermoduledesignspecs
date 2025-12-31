import { Calendar, Car, Phone, User } from 'lucide-react';
import { Dossier } from '../types/dossier';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';

interface DossierCardProps {
  dossier: Dossier;
  onClick: () => void;
}

export function DossierCard({ dossier, onClick }: DossierCardProps) {
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
      className="bg-white rounded-lg p-6 card-shadow hover:card-shadow-hover transition-all cursor-pointer border border-[#E2E8F0] hover:border-[#F97316]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-[#0F172A]">{dossier.numero}</h3>
          <div className="flex items-center gap-2 mt-1">
            <StatusBadge status={dossier.status} />
            <PriorityBadge priorite={dossier.priorite} />
          </div>
        </div>
      </div>

      {/* Client Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-[#64748B]">
          <User className="w-4 h-4" />
          <p>{dossier.client.nom}</p>
        </div>
        <div className="flex items-center gap-2 text-[#64748B]">
          <Phone className="w-4 h-4" />
          <p>{dossier.client.telephone}</p>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="flex items-center gap-2 text-[#64748B] mb-4 pb-4 border-b border-[#E2E8F0]">
        <Car className="w-4 h-4" />
        <p>{dossier.vehicule.marque} {dossier.vehicule.modele}</p>
        <span className="text-[#94A3B8]">•</span>
        <p>{dossier.vehicule.immatriculation}</p>
      </div>

      {/* Description */}
      <p className="text-[#64748B] mb-4 line-clamp-2">{dossier.description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#64748B]">
          <Calendar className="w-4 h-4" />
          <small>Mis à jour le {formatDate(dossier.dateMiseAJour)}</small>
        </div>
        {dossier.montantEstime && (
          <p className="text-[#F97316]">{formatCurrency(dossier.montantEstime)}</p>
        )}
      </div>

      {dossier.assigneA && (
        <div className="mt-3 pt-3 border-t border-[#E2E8F0]">
          <small className="text-[#64748B]">Assigné à: {dossier.assigneA}</small>
        </div>
      )}
    </div>
  );
}
