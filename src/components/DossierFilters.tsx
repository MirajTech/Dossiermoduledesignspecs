import { Search, SlidersHorizontal } from 'lucide-react';
import { DossierStatus } from '../types/dossier';
import { StatusBadge } from './StatusBadge';

interface DossierFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedStatus: DossierStatus | 'tous';
  onStatusChange: (status: DossierStatus | 'tous') => void;
  selectedPriority: string;
  onPriorityChange: (priority: string) => void;
}

const allStatuses: Array<DossierStatus | 'tous'> = [
  'tous',
  'ouvert',
  'en_cours',
  'expertise',
  'devis',
  'reparation',
  'facturation',
  'cloture',
  'archive'
];

export function DossierFilters({
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  selectedPriority,
  onPriorityChange
}: DossierFiltersProps) {
  return (
    <div className="bg-white rounded-lg p-6 card-shadow mb-6">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#64748B]" />
        <input
          type="text"
          placeholder="Rechercher un dossier, client ou immatriculation..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-3">
        <SlidersHorizontal className="w-4 h-4 text-[#64748B]" />
        <small className="text-[#64748B]">Filtres:</small>
      </div>

      {/* Status Filter */}
      <div className="mb-4">
        <small className="text-[#64748B] block mb-2">Statut:</small>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onStatusChange('tous')}
            className={`px-3 py-1.5 rounded-lg border transition-colors ${
              selectedStatus === 'tous'
                ? 'bg-[#F97316] text-white border-[#F97316]'
                : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#F97316]'
            }`}
          >
            <small>Tous</small>
          </button>
          {allStatuses.slice(1).map((status) => (
            <button
              key={status}
              onClick={() => onStatusChange(status as DossierStatus)}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedStatus === status
                  ? 'bg-[#F97316] text-white border-[#F97316]'
                  : 'bg-white border-[#E2E8F0] hover:border-[#F97316]'
              }`}
            >
              {selectedStatus === status ? (
                <small className="text-white">
                  {status === 'ouvert' && 'Ouvert'}
                  {status === 'en_cours' && 'En cours'}
                  {status === 'expertise' && 'Expertise'}
                  {status === 'devis' && 'Devis'}
                  {status === 'reparation' && 'Réparation'}
                  {status === 'facturation' && 'Facturation'}
                  {status === 'cloture' && 'Clôturé'}
                  {status === 'archive' && 'Archivé'}
                </small>
              ) : (
                <StatusBadge status={status as DossierStatus} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Priority Filter */}
      <div>
        <small className="text-[#64748B] block mb-2">Priorité:</small>
        <div className="flex flex-wrap gap-2">
          {['tous', 'basse', 'normale', 'haute', 'urgente'].map((priority) => (
            <button
              key={priority}
              onClick={() => onPriorityChange(priority)}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedPriority === priority
                  ? 'bg-[#F97316] text-white border-[#F97316]'
                  : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#F97316]'
              }`}
            >
              <small className={selectedPriority === priority ? 'text-white' : ''}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
