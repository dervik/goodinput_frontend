import { Time } from "@angular/common";

export interface Project {
  projectID: number;
  titel: string;
  ersteller: string;
  intervall: number;
  kategorie: string;
  progress: number;
}

export interface User {
  userID: number;
  vorname: string;
  nachname: string;
  email: string;
  abteilung: string;
  rolle: string;
}

export interface Projektbeteiligung {
  userID: number;
  projectID: number;
}

export interface Teilnahme {
  userID: number;
  umfrageID: number;
}

export interface Umfrage {
  umfrageID: number;
  projectID: number;
  titel: string;
  active: boolean;
  timestampCreation: string;
  timestampLastChange: string;
  teilnehmerrate: number;
}

export interface Frage {
  frageID: number;
  umfrageID: number;
  art: string;
  inhalt: string;
}

export interface Abstimmung {
  frageID: number;
  antwortinhalt: string;
  dauer: Time;
}

