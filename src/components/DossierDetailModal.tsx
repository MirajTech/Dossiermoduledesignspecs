import { X, User, Phone, Mail, Car, Calendar, FileText, DollarSign, UserCircle } from 'lucide-react';
import { Dossier } from '../types/dossier';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';

interface DossierDetailModalProps {
  dossier: Dossier;
  onClose: () => void;
}

export function DossierDetailModal({ dossier, onClose }: DossierDetailModalProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto card-shadow-hover"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] p-6 flex items-center justify-between">
          <div>
            <h2 className="text-[#0F172A]">{dossier.numero}</h2>
            <div className="flex items-center gap-2 mt-2">
              <StatusBadge status={dossier.status} />
              <PriorityBadge priorite={dossier.priorite} />
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors"
          >
            <X className="w-5 h-5 text-[#64748B]" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Client Section */}
          <section>
            <h3 className="text-[#0F172A] mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-[#F97316]" />
              Informations Client
            </h3>
            <div className="bg-[#F1F5F9] rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-[#64748B]" />
                <div>
                  <small className="text-[#64748B]">Nom</small>
                  <p>{dossier.client.nom}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#64748B]" />
                <div>
                  <small className="text-[#64748B]">Téléphone</small>
                  <p>{dossier.client.telephone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#64748B]" />
                <div>
                  <small className="text-[#64748B]">Email</small>
                  <p>{dossier.client.email}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Vehicle Section */}
          <section>
            <h3 className="text-[#0F172A] mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-[#F97316]" />
              Véhicule
            </h3>
            <div className="bg-[#F1F5F9] rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <small className="text-[#64748B]">Marque</small>
                  <p>{dossier.vehicule.marque}</p>
                </div>
                <div>
                  <small className="text-[#64748B]">Modèle</small>
                  <p>{dossier.vehicule.modele}</p>
                </div>
                <div>
                  <small className="text-[#64748B]">Immatriculation</small>
                  <p>{dossier.vehicule.immatriculation}</p>
                </div>
                <div>
                  <small className="text-[#64748B]">Année</small>
                  <p>{dossier.vehicule.annee}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section>
            <h3 className="text-[#0F172A] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#F97316]" />
              Description
            </h3>
            <div className="bg-[#F1F5F9] rounded-lg p-4">
              <p className="text-[#0F172A]">{dossier.description}</p>
            </div>
          </section>

          {/* Financial Section */}
          {(dossier.montantEstime || dossier.montantFinal) && (
            <section>
              <h3 className="text-[#0F172A] mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#F97316]" />
                Montants
              </h3>
              <div className="bg-[#F1F5F9] rounded-lg p-4 grid grid-cols-2 gap-4">
                {dossier.montantEstime && (
                  <div>
                    <small className="text-[#64748B]">Montant Estimé</small>
                    <p className="text-[#F97316]">{formatCurrency(dossier.montantEstime)}</p>
                  </div>
                )}
                {dossier.montantFinal && (
                  <div>
                    <small className="text-[#64748B]">Montant Final</small>
                    <p className="text-[#22C55E]">{formatCurrency(dossier.montantFinal)}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Assignment and Dates */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dossier.assigneA && (
                <div className="bg-[#F1F5F9] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <UserCircle className="w-4 h-4 text-[#64748B]" />
                    <small className="text-[#64748B]">Assigné à</small>
                  </div>
                  <p>{dossier.assigneA}</p>
                </div>
              )}
              <div className="bg-[#F1F5F9] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#64748B]" />
                  <small className="text-[#64748B]">Dates</small>
                </div>
                <div className="space-y-1">
                  <p>Créé: {formatDate(dossier.dateCreation)}</p>
                  <p>Mis à jour: {formatDate(dossier.dateMiseAJour)}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] p-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#E2E8F0] rounded-lg text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
          >
            Fermer
          </button>
          <button className="px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-[#EA580C] transition-colors">
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}
