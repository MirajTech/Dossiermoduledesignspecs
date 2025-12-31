export interface TimelineEvent {
  id: string;
  date: string;
  time: string;
  type: 'created' | 'expertise' | 'devis' | 'reparation' | 'facturation' | 'cession';
  title: string;
  description: string;
  reference?: string;
  amount?: number;
  status?: string;
  completed: boolean;
}

export const mockTimeline: TimelineEvent[] = [
  {
    id: '1',
    date: '15/01/2024',
    time: '09:30',
    type: 'created',
    title: 'Dossier créé',
    description: 'Client: Jean Dupont | Véhicule: AB-123-CD',
    completed: true
  },
  {
    id: '2',
    date: '16/01/2024',
    time: '14:00',
    type: 'expertise',
    title: 'Expertise liée',
    description: 'EXP-2024-00045 | Montant: 2,500€ | Validée',
    reference: 'EXP-2024-00045',
    amount: 2500,
    status: 'Validée',
    completed: true
  },
  {
    id: '3',
    date: '18/01/2024',
    time: '10:15',
    type: 'devis',
    title: 'Devis créé',
    description: 'DEV-2024-00089 | 3,200€ | En attente',
    reference: 'DEV-2024-00089',
    amount: 3200,
    status: 'En attente',
    completed: true
  },
  {
    id: '4',
    date: '',
    time: '',
    type: 'reparation',
    title: 'Ordre de réparation',
    description: 'À venir',
    completed: false
  },
  {
    id: '5',
    date: '',
    time: '',
    type: 'facturation',
    title: 'Facture',
    description: 'À venir',
    completed: false
  },
  {
    id: '6',
    date: '',
    time: '',
    type: 'cession',
    title: 'Cession',
    description: 'À venir',
    completed: false
  }
];
