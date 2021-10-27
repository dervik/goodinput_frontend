import { Component, OnInit } from '@angular/core';
import { FRAGEN } from '../data/fragen';
import { Frage } from '../data/interfaces';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-umfrage',
  templateUrl: './umfrage.component.html',
  styleUrls: ['./umfrage.component.scss']
})
export class UmfrageComponent implements OnInit {
  fragen: Frage[] = [];
  id = Number(this.route.snapshot.paramMap.get('id'));

  getFragen(id: number): Observable<Frage[]> {
    const fragen = FRAGEN.filter(h => h.umfrageID === id)!;
    return of(fragen);
  }

  goBack(): void {
    this.location.back();
  }  

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getFragen(this.id).subscribe(fragen => this.fragen = fragen);
  }

}
