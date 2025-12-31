import { Dossier } from '../types/dossier';

export const mockDossiers: Dossier[] = [
  {
    id: '1',
    numero: 'DOS-2024-001',
    client: {
      nom: 'Jean Dupont',
      telephone: '+33 6 12 34 56 78',
      email: 'jean.dupont@email.fr'
    },
    vehicule: {
      marque: 'Peugeot',
      modele: '308',
      immatriculation: 'AB-123-CD',
      annee: 2021
    },
    status: 'reparation',
    dateCreation: '2024-01-15',
    dateMiseAJour: '2024-01-20',
    description: 'Réparation pare-choc avant suite à collision',
    montantEstime: 1200,
    assigneA: 'Marc Leblanc',
    priorite: 'normale'
  },
  {
    id: '2',
    numero: 'DOS-2024-002',
    client: {
      nom: 'Marie Martin',
      telephone: '+33 6 98 76 54 32',
      email: 'marie.martin@email.fr'
    },
    vehicule: {
      marque: 'Renault',
      modele: 'Clio',
      immatriculation: 'EF-456-GH',
      annee: 2019
    },
    status: 'expertise',
    dateCreation: '2024-01-18',
    dateMiseAJour: '2024-01-19',
    description: 'Expertise dégâts aile arrière gauche',
    assigneA: 'Sophie Durand',
    priorite: 'haute'
  },
  {
    id: '3',
    numero: 'DOS-2024-003',
    client: {
      nom: 'Pierre Lefebvre',
      telephone: '+33 6 45 67 89 01',
      email: 'p.lefebvre@email.fr'
    },
    vehicule: {
      marque: 'BMW',
      modele: 'Serie 3',
      immatriculation: 'IJ-789-KL',
      annee: 2022
    },
    status: 'devis',
    dateCreation: '2024-01-19',
    dateMiseAJour: '2024-01-20',
    description: 'Peinture complète capot et portières',
    montantEstime: 2500,
    assigneA: 'Marc Leblanc',
    priorite: 'normale'
  },
  {
    id: '4',
    numero: 'DOS-2024-004',
    client: {
      nom: 'Sophie Bernard',
      telephone: '+33 6 23 45 67 89',
      email: 'sophie.bernard@email.fr'
    },
    vehicule: {
      marque: 'Audi',
      modele: 'A4',
      immatriculation: 'MN-012-OP',
      annee: 2020
    },
    status: 'facturation',
    dateCreation: '2024-01-10',
    dateMiseAJour: '2024-01-20',
    description: 'Remplacement rétroviseur et réparation portière',
    montantEstime: 850,
    montantFinal: 820,
    assigneA: 'Marc Leblanc',
    priorite: 'normale'
  },
  {
    id: '5',
    numero: 'DOS-2024-005',
    client: {
      nom: 'Luc Moreau',
      telephone: '+33 6 87 65 43 21',
      email: 'luc.moreau@email.fr'
    },
    vehicule: {
      marque: 'Volkswagen',
      modele: 'Golf',
      immatriculation: 'QR-345-ST',
      annee: 2018
    },
    status: 'ouvert',
    dateCreation: '2024-01-20',
    dateMiseAJour: '2024-01-20',
    description: 'Demande de devis pour rayures multiples',
    priorite: 'basse'
  },
  {
    id: '6',
    numero: 'DOS-2024-006',
    client: {
      nom: 'Isabelle Petit',
      telephone: '+33 6 11 22 33 44',
      email: 'i.petit@email.fr'
    },
    vehicule: {
      marque: 'Mercedes',
      modele: 'Classe C',
      immatriculation: 'UV-678-WX',
      annee: 2023
    },
    status: 'en_cours',
    dateCreation: '2024-01-17',
    dateMiseAJour: '2024-01-20',
    description: 'Réparation capot et pare-brise',
    montantEstime: 1800,
    assigneA: 'Sophie Durand',
    priorite: 'urgente'
  },
  {
    id: '7',
    numero: 'DOS-2023-089',
    client: {
      nom: 'Thomas Dubois',
      telephone: '+33 6 55 66 77 88',
      email: 'thomas.dubois@email.fr'
    },
    vehicule: {
      marque: 'Citroën',
      modele: 'C3',
      immatriculation: 'YZ-901-AB',
      annee: 2017
    },
    status: 'cloture',
    dateCreation: '2023-12-20',
    dateMiseAJour: '2024-01-05',
    description: 'Peinture portière avant droite',
    montantEstime: 450,
    montantFinal: 450,
    assigneA: 'Marc Leblanc',
    priorite: 'normale'
  },
  {
    id: '8',
    numero: 'DOS-2023-078',
    client: {
      nom: 'Nathalie Rousseau',
      telephone: '+33 6 99 88 77 66',
      email: 'n.rousseau@email.fr'
    },
    vehicule: {
      marque: 'Ford',
      modele: 'Fiesta',
      immatriculation: 'CD-234-EF',
      annee: 2016
    },
    status: 'archive',
    dateCreation: '2023-11-10',
    dateMiseAJour: '2023-12-15',
    description: 'Réparation complète suite accident',
    montantEstime: 3500,
    montantFinal: 3420,
    assigneA: 'Sophie Durand',
    priorite: 'haute'
  }
];
