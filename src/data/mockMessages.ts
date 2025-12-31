export interface Message {
  id: string;
  direction: 'entrant' | 'sortant';
  date: string;
  time: string;
  subject: string;
  type: 'email' | 'sms';
  status: 'Traité' | 'En attente' | 'Envoyé';
}

export const mockMessages: Message[] = [
  {
    id: '1',
    direction: 'entrant',
    date: '15/01/2024',
    time: '09:30',
    subject: 'Confirmation de réception du véhicule',
    type: 'email',
    status: 'Traité'
  },
  {
    id: '2',
    direction: 'sortant',
    date: '17/01/2024',
    time: '14:00',
    subject: 'Envoi devis pour validation',
    type: 'sms',
    status: 'En attente'
  },
  {
    id: '3',
    direction: 'entrant',
    date: '18/01/2024',
    time: '10:00',
    subject: 'Question sur le délai de réparation',
    type: 'email',
    status: 'Traité'
  },
  {
    id: '4',
    direction: 'sortant',
    date: '18/01/2024',
    time: '15:30',
    subject: 'Réponse délai estimé 5 jours',
    type: 'email',
    status: 'Envoyé'
  }
];
