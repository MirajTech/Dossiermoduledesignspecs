import { MoreVertical, Eye, Edit, Archive } from 'lucide-react';
import { Dossier } from '../types/dossier';
import { StatusBadge } from './StatusBadge';
import { useState } from 'react';

interface DossierTableProps {
  dossiers: Dossier[];
  onViewDossier: (dossier: Dossier) => void;
}

export function DossierTable({ dossiers, onViewDossier }: DossierTableProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg border border-[#E2E8F0] card-shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F1F5F9] border-b border-[#E2E8F0]">
            <tr>
              <th className="text-left px-6 py-3">
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Référence</small>
              </th>
              <th className="text-left px-6 py-3">
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Client</small>
              </th>
              <th className="text-left px-6 py-3">
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Véhicule</small>
              </th>
              <th className="text-left px-6 py-3">
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Statut</small>
              </th>
              <th className="text-left px-6 py-3">
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Assurance</small>
              </th>
              <th className="text-left px-6 py-3">
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Date sinistre</small>
              </th>
              <th className="text-left px-6 py-3">
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Actions</small>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {dossiers.map((dossier) => (
              <tr key={dossier.id} className="hover:bg-[#F8FAFC] transition-colors">
                <td className="px-6 py-4">
                  <button
                    onClick={() => onViewDossier(dossier)}
                    className="font-mono text-[#3B82F6] hover:underline"
                  >
                    {dossier.numero}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p>{dossier.client.nom}</p>
                    <small className="text-[#64748B]">{dossier.client.telephone}</small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-mono">{dossier.vehicule.immatriculation}</p>
                    <small className="text-[#64748B]">
                      {dossier.vehicule.marque} {dossier.vehicule.modele}
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={dossier.status} />
                </td>
                <td className="px-6 py-4">
                  <p className="text-[#64748B]">—</p>
                </td>
                <td className="px-6 py-4">
                  <p>{formatDate(dossier.dateCreation)}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <button
                      onClick={() => toggleMenu(dossier.id)}
                      className="p-1 hover:bg-[#F1F5F9] rounded transition-colors"
                    >
                      <MoreVertical className="w-4 h-4 text-[#64748B]" />
                    </button>
                    
                    {openMenuId === dossier.id && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={() => setOpenMenuId(null)}
                        />
                        <div className="absolute right-0 top-8 z-20 bg-white rounded-lg border border-[#E2E8F0] shadow-lg py-1 min-w-[140px]">
                          <button
                            onClick={() => {
                              onViewDossier(dossier);
                              setOpenMenuId(null);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#F1F5F9] transition-colors"
                          >
                            <Eye className="w-4 h-4 text-[#64748B]" />
                            <small>Voir</small>
                          </button>
                          <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#F1F5F9] transition-colors">
                            <Edit className="w-4 h-4 text-[#64748B]" />
                            <small>Modifier</small>
                          </button>
                          <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#FEF2F2] transition-colors text-[#EF4444]">
                            <Archive className="w-4 h-4" />
                            <small>Archiver</small>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="border-t border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
        <small className="text-[#64748B]">
          Affichage de {dossiers.length} dossier{dossiers.length > 1 ? 's' : ''}
        </small>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 rounded hover:bg-[#F1F5F9] transition-colors">
            <small className="text-[#64748B]">←</small>
          </button>
          <button className="px-3 py-1 rounded bg-[#F97316] text-white">
            <small>1</small>
          </button>
          <button className="px-3 py-1 rounded hover:bg-[#F1F5F9] transition-colors">
            <small className="text-[#64748B]">2</small>
          </button>
          <button className="px-3 py-1 rounded hover:bg-[#F1F5F9] transition-colors">
            <small className="text-[#64748B]">3</small>
          </button>
          <span className="px-2 text-[#64748B]">...</span>
          <button className="px-3 py-1 rounded hover:bg-[#F1F5F9] transition-colors">
            <small className="text-[#64748B]">10</small>
          </button>
          <button className="px-3 py-1 rounded hover:bg-[#F1F5F9] transition-colors">
            <small className="text-[#64748B]">→</small>
          </button>
        </div>
      </div>
    </div>
  );
}
