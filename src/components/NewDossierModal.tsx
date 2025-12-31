import { useState } from 'react';
import { X, Search, Plus, User, Car, Building2, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { mockClients, insuranceCompanies, Client, Vehicle } from '../data/mockClients';

interface NewDossierModalProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function NewDossierModal({ onClose, onSubmit }: NewDossierModalProps) {
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [insuranceData, setInsuranceData] = useState({
    compagnie: '',
    numeroPolice: '',
    numeroSinistre: '',
    dateSinistre: '',
    expert: '',
    notes: ''
  });

  const filteredClients = mockClients.filter(client =>
    client.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.telephone.includes(searchQuery) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const data = {
      client: selectedClient,
      vehicle: selectedVehicle,
      insurance: insuranceData
    };
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto card-shadow-hover animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] p-6 flex items-center justify-between rounded-t-lg">
          <div>
            <h2 className="text-[#0F172A]">Nouveau dossier</h2>
            <small className="text-[#64748B]">
              Étape {step}/3: {
                step === 1 ? 'Sélection du client' :
                step === 2 ? 'Sélection du véhicule' :
                'Détails assurance'
              }
            </small>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors"
          >
            <X className="w-5 h-5 text-[#64748B]" />
          </button>
        </div>

        <div className="p-6">
          {/* Step 1: Client Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <Input
                placeholder="Rechercher un client..."
                value={searchQuery}
                onChange={setSearchQuery}
                icon={Search}
              />

              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedClient?.id === client.id
                        ? 'border-[#F97316] bg-[#FFF7ED] ring-2 ring-[#F97316]'
                        : 'border-[#E2E8F0] hover:border-[#F97316] hover:bg-[#F8FAFC]'
                    }`}
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F1F5F9] rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-[#64748B]" />
                        </div>
                        <div>
                          <p>{client.nom}</p>
                          <small className="text-[#64748B]">{client.telephone}</small>
                        </div>
                      </div>
                      <Button
                        variant={selectedClient?.id === client.id ? 'validation' : 'outline'}
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedClient(client);
                        }}
                      >
                        {selectedClient?.id === client.id ? 'Sélectionné' : 'Sélectionner'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full p-4 border-2 border-dashed border-[#E2E8F0] rounded-lg hover:border-[#F97316] hover:bg-[#FFF7ED] transition-all flex items-center justify-center gap-2 text-[#64748B] hover:text-[#F97316]">
                <Plus className="w-4 h-4" />
                <small style={{ fontWeight: 500 }}>Créer un nouveau client</small>
              </button>
            </div>
          )}

          {/* Step 2: Vehicle Selection */}
          {step === 2 && selectedClient && (
            <div className="space-y-4">
              <div className="bg-[#F8FAFC] rounded-lg p-4 mb-4">
                <small className="text-[#64748B]">Client sélectionné</small>
                <p>{selectedClient.nom}</p>
              </div>

              <div>
                <small className="text-[#64748B] block mb-3" style={{ fontWeight: 500 }}>
                  Véhicules existants:
                </small>
                <div className="space-y-2">
                  {selectedClient.vehicules.map((vehicle) => (
                    <label
                      key={vehicle.id}
                      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedVehicle?.id === vehicle.id
                          ? 'border-[#F97316] bg-[#FFF7ED] ring-2 ring-[#F97316]'
                          : 'border-[#E2E8F0] hover:border-[#F97316] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="vehicle"
                        checked={selectedVehicle?.id === vehicle.id}
                        onChange={() => setSelectedVehicle(vehicle)}
                        className="w-4 h-4 text-[#F97316] border-[#E2E8F0] focus:ring-[#F97316]"
                      />
                      <div className="flex items-center gap-3 flex-1">
                        <Car className="w-5 h-5 text-[#64748B]" />
                        <div className="flex-1 grid grid-cols-3 gap-4">
                          <div>
                            <small className="text-[#64748B]">Immatriculation</small>
                            <p className="font-mono">{vehicle.immatriculation}</p>
                          </div>
                          <div>
                            <small className="text-[#64748B]">Véhicule</small>
                            <p>{vehicle.marque} {vehicle.modele}</p>
                          </div>
                          <div>
                            <small className="text-[#64748B]">Année</small>
                            <p>{vehicle.annee}</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full p-4 border-2 border-dashed border-[#E2E8F0] rounded-lg hover:border-[#F97316] hover:bg-[#FFF7ED] transition-all flex items-center justify-center gap-2 text-[#64748B] hover:text-[#F97316]">
                <Plus className="w-4 h-4" />
                <small style={{ fontWeight: 500 }}>Créer un nouveau véhicule</small>
              </button>
            </div>
          )}

          {/* Step 3: Insurance Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block mb-2">
                  <small className="text-[#64748B]" style={{ fontWeight: 500 }}>
                    Compagnie d'assurance
                  </small>
                </label>
                <select
                  value={insuranceData.compagnie}
                  onChange={(e) => setInsuranceData({ ...insuranceData, compagnie: e.target.value })}
                  className="w-full h-10 px-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent"
                >
                  <option value="">Sélectionner...</option>
                  {insuranceCompanies.map((company) => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">
                  <small className="text-[#64748B]" style={{ fontWeight: 500 }}>
                    N° de police
                  </small>
                </label>
                <input
                  type="text"
                  value={insuranceData.numeroPolice}
                  onChange={(e) => setInsuranceData({ ...insuranceData, numeroPolice: e.target.value })}
                  className="w-full h-10 px-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent"
                  placeholder="Numéro de police d'assurance"
                />
              </div>

              <div>
                <label className="block mb-2">
                  <small className="text-[#64748B]" style={{ fontWeight: 500 }}>
                    N° de sinistre
                  </small>
                </label>
                <input
                  type="text"
                  value={insuranceData.numeroSinistre}
                  onChange={(e) => setInsuranceData({ ...insuranceData, numeroSinistre: e.target.value })}
                  className="w-full h-10 px-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent"
                  placeholder="Numéro de sinistre"
                />
              </div>

              <div>
                <label className="block mb-2">
                  <small className="text-[#64748B]" style={{ fontWeight: 500 }}>
                    Date du sinistre
                  </small>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="date"
                    value={insuranceData.dateSinistre}
                    onChange={(e) => setInsuranceData({ ...insuranceData, dateSinistre: e.target.value })}
                    className="w-full h-10 pl-10 pr-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">
                  <small className="text-[#64748B]" style={{ fontWeight: 500 }}>
                    Expert
                  </small>
                </label>
                <input
                  type="text"
                  value={insuranceData.expert}
                  onChange={(e) => setInsuranceData({ ...insuranceData, expert: e.target.value })}
                  className="w-full h-10 px-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent"
                  placeholder="Nom de l'expert"
                />
              </div>

              <div>
                <label className="block mb-2">
                  <small className="text-[#64748B]" style={{ fontWeight: 500 }}>
                    Notes
                  </small>
                </label>
                <textarea
                  value={insuranceData.notes}
                  onChange={(e) => setInsuranceData({ ...insuranceData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:border-transparent resize-none"
                  placeholder="Notes additionnelles..."
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] p-6 flex justify-between gap-3 rounded-b-lg">
          <Button variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <div className="flex gap-3">
            {step > 1 && (
              <Button variant="outline" onClick={handlePrevious}>
                Précédent
              </Button>
            )}
            {step < 3 ? (
              <Button 
                variant="validation" 
                onClick={handleNext}
                disabled={
                  (step === 1 && !selectedClient) ||
                  (step === 2 && !selectedVehicle)
                }
              >
                Suivant
              </Button>
            ) : (
              <Button 
                variant="validation" 
                onClick={handleSubmit}
                disabled={!insuranceData.compagnie || !insuranceData.numeroSinistre}
              >
                Créer dossier
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
