export type DossierStatus =
  | "ouvert"
  | "en_cours"
  | "expertise"
  | "devis"
  | "reparation"
  | "facturation"
  | "cloture"
  | "archive";

export interface Dossier {
  id: string;
  numero: string;
  client: {
    nom: string;
    telephone: string;
    email: string;
  };
  vehicule: {
    marque: string;
    modele: string;
    immatriculation: string;
    annee: number;
  };
  status: DossierStatus;
  dateCreation: string;
  dateMiseAJour: string;
  description: string;
  montantEstime?: number;
  montantFinal?: number;
  assigneA?: string;
  priorite: "basse" | "normale" | "haute" | "urgente";
}

export interface DossierStats {
  total: number;
  ouvert: number;
  enCours: number;
  cloture: number;
}