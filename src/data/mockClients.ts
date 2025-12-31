export interface Client {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  vehicules: Vehicle[];
}

export interface Vehicle {
  id: string;
  immatriculation: string;
  marque: string;
  modele: string;
  annee: number;
}

export const mockClients: Client[] = [
  {
    id: '1',
    nom: 'Jean Dupont',
    telephone: '06 12 34 56 78',
    email: 'jean.dupont@email.fr',
    vehicules: [
      {
        id: 'v1',
        immatriculation: 'AB-123-CD',
        marque: 'Peugeot',
        modele: '308',
        annee: 2019
      },
      {
        id: 'v2',
        immatriculation: 'XY-456-ZW',
        marque: 'Renault',
        modele: 'Clio',
        annee: 2021
      }
    ]
  },
  {
    id: '2',
    nom: 'Marie Martin',
    telephone: '06 98 76 54 32',
    email: 'marie.martin@email.fr',
    vehicules: [
      {
        id: 'v3',
        immatriculation: 'EF-456-GH',
        marque: 'Renault',
        modele: 'Clio',
        annee: 2019
      }
    ]
  },
  {
    id: '3',
    nom: 'Pierre Lefebvre',
    telephone: '06 45 67 89 01',
    email: 'p.lefebvre@email.fr',
    vehicules: [
      {
        id: 'v4',
        immatriculation: 'IJ-789-KL',
        marque: 'BMW',
        modele: 'Serie 3',
        annee: 2022
      }
    ]
  },
  {
    id: '4',
    nom: 'Sophie Bernard',
    telephone: '06 23 45 67 89',
    email: 'sophie.bernard@email.fr',
    vehicules: [
      {
        id: 'v5',
        immatriculation: 'MN-012-OP',
        marque: 'Audi',
        modele: 'A4',
        annee: 2020
      }
    ]
  }
];

export const insuranceCompanies = [
  'AXA France',
  'Allianz',
  'Groupama',
  'MAAF',
  'MACIF',
  'MAIF',
  'MMA',
  'GMF',
  'Generali',
  'Direct Assurance'
];
