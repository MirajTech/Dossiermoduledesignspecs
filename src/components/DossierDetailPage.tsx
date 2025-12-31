import { ArrowLeft, User, Car, Building2, FileText, MessageSquare, Clock, ChevronRight, FolderOpen, Edit, Archive, MoreVertical, Plus } from 'lucide-react';
import { Dossier } from '../types/dossier';
import { StatusBadge } from './StatusBadge';
import { Button } from './ui/Button';
import { TabsList, TabsTrigger, TabsContent } from './ui/Tabs';
import { Badge } from './ui/Badge';
import { useState } from 'react';
import { mockTimeline } from '../data/mockTimeline';
import { mockMessages } from '../data/mockMessages';
import { mockHistory } from '../data/mockHistory';

interface DossierDetailPageProps {
  dossier: Dossier;
  onBack: () => void;
}

export function DossierDetailPage({ dossier, onBack }: DossierDetailPageProps) {
  const [activeTab, setActiveTab] = useState('chronologie');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={onBack} className="p-2 hover:bg-[#F1F5F9] rounded-lg transition-colors active:scale-98">
              <ArrowLeft className="w-5 h-5 text-[#64748B]" />
            </button>
            <div className="flex items-center gap-2 text-[#64748B]">
              <small>Dossiers</small>
              <ChevronRight className="w-4 h-4" />
              <small className="text-[#0F172A]">{dossier.numero}</small>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Summary Card */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 md:p-6 card-shadow mb-4 md:mb-6">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-[#0F172A]">{dossier.numero}</h2>
              <div className="flex items-center gap-2 mt-2">
                <StatusBadge status={dossier.status} />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" icon={Edit} size="default" className="flex-1 sm:flex-none">
                <span className="hidden sm:inline">Modifier</span>
              </Button>
              <Button variant="outline" icon={Archive} size="default" className="flex-1 sm:flex-none">
                <span className="hidden sm:inline">Archiver</span>
              </Button>
              <Button variant="ghost" icon={MoreVertical} size="icon" className="sm:flex hidden" />
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Client */}
            <div className="bg-[#F8FAFC] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-[#F97316]" />
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Client</small>
              </div>
              <p className="mb-1">{dossier.client.nom}</p>
              <small className="text-[#64748B] block">{dossier.client.telephone}</small>
              <small className="text-[#64748B] block break-all">{dossier.client.email}</small>
            </div>

            {/* Véhicule */}
            <div className="bg-[#F8FAFC] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Car className="w-4 h-4 text-[#F97316]" />
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Véhicule</small>
              </div>
              <p className="mb-1 font-mono">{dossier.vehicule.immatriculation}</p>
              <small className="text-[#64748B] block">{dossier.vehicule.marque} {dossier.vehicule.modele}</small>
              <small className="text-[#64748B] block">VIN: WVW{dossier.vehicule.annee}...</small>
            </div>

            {/* Assurance */}
            <div className="bg-[#F8FAFC] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#F97316]" />
                <small className="text-[#64748B]" style={{ fontWeight: 500 }}>Assurance</small>
              </div>
              <p className="mb-1">AXA France</p>
              <small className="text-[#64748B] block">Police: 12345678</small>
              <small className="text-[#64748B] block">Sinistre: SIN-2024-001</small>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] card-shadow">
          <div className="border-b border-[#E2E8F0] px-4 md:px-6 py-4 overflow-x-auto">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="chronologie" activeValue={activeTab} onClick={setActiveTab}>
                Chronologie
              </TabsTrigger>
              <TabsTrigger value="documents" activeValue={activeTab} onClick={setActiveTab}>
                Documents
              </TabsTrigger>
              <TabsTrigger value="messages" activeValue={activeTab} onClick={setActiveTab}>
                Messages
              </TabsTrigger>
              <TabsTrigger value="historique" activeValue={activeTab} onClick={setActiveTab}>
                Historique
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="p-4 md:p-6">
            {/* Chronologie Tab */}
            <TabsContent value="chronologie" activeValue={activeTab}>
              <div className="space-y-6">
                {mockTimeline.map((event, index) => (
                  <div key={event.id} className="flex gap-4">
                    {/* Timeline Line */}
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full border-2 ${
                        event.completed 
                          ? 'bg-[#F97316] border-[#F97316]' 
                          : 'bg-white border-[#94A3B8]'
                      }`} />
                      {index < mockTimeline.length - 1 && (
                        <div className="w-0.5 flex-1 bg-[#E2E8F0] min-h-[60px]" />
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 pb-6">
                      {event.completed ? (
                        <>
                          <div className="flex items-center gap-2 mb-2">
                            <small className="text-[#64748B]">{event.date} {event.time}</small>
                          </div>
                          <div className={`bg-white rounded-lg border-l-4 p-4 card-shadow ${
                            event.type === 'created' ? 'border-[#64748B]' :
                            event.type === 'expertise' ? 'border-[#7E22CE]' :
                            event.type === 'devis' ? 'border-[#4338CA]' :
                            'border-[#F97316]'
                          }`}>
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="mb-1">{event.title}</p>
                                <small className="text-[#64748B]">{event.description}</small>
                              </div>
                              {event.reference && (
                                <Button variant="view" size="sm">
                                  Voir →
                                </Button>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="bg-[#F8FAFC] rounded-lg border border-dashed border-[#CBD5E1] p-4">
                          <p className="text-[#94A3B8]">{event.title}</p>
                          <small className="text-[#94A3B8]">(à venir)</small>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" activeValue={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Expertise Card */}
                <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 card-shadow hover:card-shadow-hover transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#7E22CE]" />
                    <h3>Expertise</h3>
                  </div>
                  <p className="font-mono mb-2">EXP-2024-00045</p>
                  <Badge variant="custom" bgColor="#F3E8FF" textColor="#7E22CE" className="mb-3">
                    Validée
                  </Badge>
                  <p className="text-[#F97316] mb-4">{formatCurrency(2500)}</p>
                  <div className="flex gap-2">
                    <Button variant="view" size="sm" className="flex-1">Voir</Button>
                    <Button variant="outline" size="sm" className="flex-1">PDF</Button>
                  </div>
                </div>

                {/* Devis Card */}
                <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 card-shadow hover:card-shadow-hover transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#4338CA]" />
                    <h3>Devis</h3>
                  </div>
                  <p className="font-mono mb-2">DEV-2024-00089</p>
                  <Badge variant="custom" bgColor="#E0E7FF" textColor="#4338CA" className="mb-3">
                    En attente
                  </Badge>
                  <p className="text-[#F97316] mb-4">{formatCurrency(3200)}</p>
                  <div className="flex gap-2">
                    <Button variant="view" size="sm" className="flex-1">Voir</Button>
                    <Button variant="outline" size="sm" className="flex-1">PDF</Button>
                  </div>
                </div>

                {/* Ordre de Réparation - Empty */}
                <div className="bg-white rounded-lg border border-dashed border-[#CBD5E1] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#94A3B8]" />
                    <h3 className="text-[#94A3B8]">Ordre de Réparation</h3>
                  </div>
                  <p className="text-[#94A3B8] mb-4">Aucun OR créé</p>
                  <Button variant="validation" size="sm" className="w-full">Créer</Button>
                </div>

                {/* Factures Card */}
                <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 card-shadow hover:card-shadow-hover transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#0E7490]" />
                    <h3>Factures</h3>
                  </div>
                  <p className="mb-2">2 factures</p>
                  <p className="text-[#F97316] mb-2">Total: {formatCurrency(3500)}</p>
                  <Badge variant="custom" bgColor="#CFFAFE" textColor="#0E7490" className="mb-4">
                    Payée
                  </Badge>
                  <Button variant="view" size="sm" className="w-full">Voir tout</Button>
                </div>

                {/* Cession - Empty */}
                <div className="bg-white rounded-lg border border-dashed border-[#CBD5E1] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#94A3B8]" />
                    <h3 className="text-[#94A3B8]">Cession</h3>
                  </div>
                  <p className="text-[#94A3B8] mb-4">Aucune cession</p>
                  <Button variant="validation" size="sm" className="w-full">Créer</Button>
                </div>

                {/* Véhicule de prêt - Empty */}
                <div className="bg-white rounded-lg border border-dashed border-[#CBD5E1] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-[#94A3B8]" />
                    <h3 className="text-[#94A3B8]">Véhicule de prêt</h3>
                  </div>
                  <p className="text-[#94A3B8] mb-4">Non réservé</p>
                  <Button variant="validation" size="sm" className="w-full">Réserver</Button>
                </div>
              </div>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" activeValue={activeTab}>
              <div className="space-y-3">
                {mockMessages.map((message) => (
                  <div key={message.id} className="bg-white rounded-lg border border-[#E2E8F0] p-4 card-shadow hover:card-shadow-hover transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.direction === 'entrant' ? 'bg-[#DBEAFE]' : 'bg-[#FEF3C7]'
                        }`}>
                          <MessageSquare className={`w-4 h-4 ${
                            message.direction === 'entrant' ? 'text-[#1D4ED8]' : 'text-[#B45309]'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <small className="text-[#64748B]">
                              {message.direction === 'entrant' ? '← Entrant' : '→ Sortant'}
                            </small>
                            <small className="text-[#64748B]">
                              {message.date} {message.time}
                            </small>
                          </div>
                          <p className="mb-2">{message.subject}</p>
                          <div className="flex gap-2">
                            <Badge variant="default">{message.type}</Badge>
                            <Badge 
                              variant="custom" 
                              bgColor={message.status === 'Traité' ? '#DCFCE7' : '#FEF3C7'}
                              textColor={message.status === 'Traité' ? '#15803D' : '#B45309'}
                            >
                              {message.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="view" size="sm">
                        Voir →
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="validation" icon={Plus} className="w-full">
                  Nouveau message
                </Button>
              </div>
            </TabsContent>

            {/* Historique Tab */}
            <TabsContent value="historique" activeValue={activeTab}>
              <div className="space-y-0 border border-[#E2E8F0] rounded-lg overflow-hidden">
                {mockHistory.map((entry, index) => (
                  <div 
                    key={entry.id} 
                    className={`p-4 ${index !== mockHistory.length - 1 ? 'border-b border-[#E2E8F0]' : ''} hover:bg-[#F8FAFC] transition-colors`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-32 flex-shrink-0">
                        <p className="text-[#64748B]">{entry.date}</p>
                        <small className="text-[#64748B]">{entry.time}</small>
                      </div>
                      <div className="h-full w-px bg-[#E2E8F0]" />
                      <div className="flex-1">
                        <p className="mb-1">{entry.action}</p>
                        <small className="text-[#64748B]">{entry.details}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </main>
    </div>
  );
}