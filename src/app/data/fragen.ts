import { Frage } from './interfaces';

export const FRAGEN: Frage[] = [
  { frageID: 1, umfrageID: 1, art: 'geschlossen', inhalt: "Als wie sauber schätzen Sie die Räumlichkeiten im Allgemeinen ein?"},
  { frageID: 2, umfrageID: 1, art: 'geschlossen', inhalt: "Wie gut wurden Ihre bisherigen Vorschläge umgesetzt?"},
  { frageID: 3, umfrageID: 1, art: 'geschlossen', inhalt: "Wie zufrieden sind Sie mit der Sauberkeit?"},
  { frageID: 4, umfrageID: 1, art: 'offen', inhalt: "Was finden Sie gut bezüglich der Sauberkeit?"},
  { frageID: 5, umfrageID: 1, art: 'offen', inhalt: "Was finden Sie verbesserungswürdig?"}
];