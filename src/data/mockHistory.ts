export interface HistoryEntry {
  id: string;
  date: string;
  time: string;
  action: string;
  details: string;
  user: string;
}

export const mockHistory: HistoryEntry[] = [
  {
    id: '1',
    date: '20/01/2024',
    time: '14:32',
    action: 'Statut modifié: Devis → Réparation',
    details: 'Par: admin@karrosserie.ma',
    user: 'admin@karrosserie.ma'
  },
  {
    id: '2',
    date: '18/01/2024',
    time: '10:15',
    action: 'Devis DEV-2024-00089 lié',
    details: 'Par: système (auto-link)',
    user: 'système (auto-link)'
  },
  {
    id: '3',
    date: '16/01/2024',
    time: '14:00',
    action: 'Expertise EXP-2024-00045 liée',
    details: 'Par: système (auto-link)',
    user: 'système (auto-link)'
  },
  {
    id: '4',
    date: '15/01/2024',
    time: '09:30',
    action: 'Dossier créé',
    details: 'Par: admin@karrosserie.ma',
    user: 'admin@karrosserie.ma'
  }
];
