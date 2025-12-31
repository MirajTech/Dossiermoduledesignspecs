import { useState, useMemo } from 'react';
import { FolderOpen, FileText, Plus, Filter, ChevronDown } from 'lucide-react';
import { StatusStatsCard } from './components/StatusStatsCard';
import { DossierTable } from './components/DossierTable';
import { DossierMobileCard } from './components/DossierMobileCard';
import { DossierDetailPage } from './components/DossierDetailPage';
import { NewDossierModal } from './components/NewDossierModal';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { TabsList, TabsTrigger } from './components/ui/Tabs';
import { mockDossiers } from './data/mockDossiers';
import { Dossier, DossierStatus } from './types/dossier';

export default function App() {
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState<'tous' | 'actifs' | 'archives'>('tous');
  const [selectedStatus, setSelectedStatus] = useState<DossierStatus | 'tous'>('tous');
  const [showNewDossierModal, setShowNewDossierModal] = useState(false);

  // Calculate stats by status
  const statusCounts = useMemo(() => {
    return {
      ouvert: mockDossiers.filter(d => d.status === 'ouvert').length,
      enCours: mockDossiers.filter(d => d.status === 'en_cours').length,
      expertise: mockDossiers.filter(d => d.status === 'expertise').length,
      devis: mockDossiers.filter(d => d.status === 'devis').length,
      reparation: mockDossiers.filter(d => d.status === 'reparation').length,
      facturation: mockDossiers.filter(d => d.status === 'facturation').length
    };
  }, []);

  // Filter dossiers
  const filteredDossiers = useMemo(() => {
    return mockDossiers.filter(dossier => {
      // View filter
      if (activeView === 'actifs' && ['cloture', 'archive'].includes(dossier.status)) return false;
      if (activeView === 'archives' && dossier.status !== 'archive') return false;

      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        dossier.numero.toLowerCase().includes(searchLower) ||
        dossier.client.nom.toLowerCase().includes(searchLower) ||
        dossier.vehicule.immatriculation.toLowerCase().includes(searchLower);

      // Status filter
      const matchesStatus = selectedStatus === 'tous' || dossier.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, activeView, selectedStatus]);

  const handleNewDossierSubmit = (data: any) => {
    console.log('New dossier data:', data);
    // Handle dossier creation
  };

  // Show detail page if dossier selected
  if (selectedDossier) {
    return (
      <DossierDetailPage 
        dossier={selectedDossier} 
        onBack={() => setSelectedDossier(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F97316] rounded-lg flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-[#0F172A]">Dossiers</h1>
                <small className="text-[#64748B] hidden sm:block">Gestion centralisée des dossiers sinistre</small>
              </div>
            </div>
            <Button variant="validation" icon={Plus} onClick={() => setShowNewDossierModal(true)}>
              <span className="hidden sm:inline">Nouveau dossier</span>
              <span className="sm:hidden">Nouveau</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4 md:mb-6">
          <StatusStatsCard label="Ouvert" count={statusCounts.ouvert} icon={FileText} />
          <StatusStatsCard label="En cours" count={statusCounts.enCours} icon={FileText} />
          <StatusStatsCard label="Expertise" count={statusCounts.expertise} icon={FileText} />
          <StatusStatsCard label="Devis" count={statusCounts.devis} icon={FileText} />
          <StatusStatsCard label="Réparation" count={statusCounts.reparation} icon={FileText} />
          <StatusStatsCard label="Facturation" count={statusCounts.facturation} icon={FileText} />
        </div>

        {/* Filters Row */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 card-shadow mb-4 md:mb-6">
          <div className="flex flex-col gap-4">
            {/* Tabs */}
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="tous" activeValue={activeView} onClick={() => setActiveView('tous')}>
                Tous
              </TabsTrigger>
              <TabsTrigger value="actifs" activeValue={activeView} onClick={() => setActiveView('actifs')}>
                Actifs
              </TabsTrigger>
              <TabsTrigger value="archives" activeValue={activeView} onClick={() => setActiveView('archives')}>
                Archives
              </TabsTrigger>
            </TabsList>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  placeholder="Rechercher un dossier..."
                  value={searchQuery}
                  onChange={setSearchQuery}
                  icon={Filter}
                />
              </div>
              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as DossierStatus | 'tous')}
                className="h-10 px-3 pr-8 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent appearance-none bg-white"
              >
                <option value="tous">Tous les statuts</option>
                <option value="ouvert">Ouvert</option>
                <option value="en_cours">En cours</option>
                <option value="expertise">Expertise</option>
                <option value="devis">Devis</option>
                <option value="reparation">Réparation</option>
                <option value="facturation">Facturation</option>
                <option value="cloture">Clôturé</option>
                <option value="archive">Archivé</option>
              </select>
              <input
                type="date"
                className="h-10 px-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Desktop: Data Table / Mobile: Card View */}
        <div className="hidden md:block">
          <DossierTable 
            dossiers={filteredDossiers} 
            onViewDossier={setSelectedDossier}
          />
        </div>

        <div className="md:hidden space-y-3">
          {filteredDossiers.map((dossier) => (
            <DossierMobileCard
              key={dossier.id}
              dossier={dossier}
              onClick={() => setSelectedDossier(dossier)}
            />
          ))}
        </div>
      </main>

      {/* New Dossier Modal */}
      {showNewDossierModal && (
        <NewDossierModal
          onClose={() => setShowNewDossierModal(false)}
          onSubmit={handleNewDossierSubmit}
        />
      )}
    </div>
  );
}