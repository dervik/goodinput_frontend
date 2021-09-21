import { Umfrage } from './interfaces';

export const UMFRAGEN: Umfrage[] = [
  { umfrageID: 1, projectID: 1, titel: 'Sauberkeit der Räumlichkeiten - 07.08.2021', active: false, timestampCreation: '2021-08-07T:08:00:00+0100', timestampLastChange: '2021-08-07T:08:00:00+0100', teilnehmerrate: 67},
  { umfrageID: 2, projectID: 1, titel: 'Sauberkeit der Räumlichkeiten - 21.08.2021', active: false, timestampCreation: '2021-08-21T:08:00:00+0100', timestampLastChange: '2021-08-21T:08:00:00+0100', teilnehmerrate: 95},
  { umfrageID: 3, projectID: 1, titel: 'Sauberkeit der Räumlichkeiten - 04.09.2021', active: true, timestampCreation: '2021-09-04T:08:00:00+0100', timestampLastChange: '2021-09-04T:08:00:00+0100', teilnehmerrate: 38},
  { umfrageID: 4, projectID: 2, titel: 'Kommunikation mit dem Vorgesetzten - 21.08.2021', active: true, timestampCreation: '2021-09-04T:08:00:00+0100', timestampLastChange: '2021-09-04T:08:00:00+0100', teilnehmerrate: 33}
];