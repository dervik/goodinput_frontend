import { Component, OnInit } from '@angular/core';
import { UMFRAGEN } from '../data/umfragen';

@Component({
  selector: 'app-umfragen',
  templateUrl: './umfragen.component.html',
  styleUrls: ['./umfragen.component.scss']
})

export class UmfragenComponent implements OnInit {

  umfragen = UMFRAGEN

  constructor() { }

  ngOnInit(): void {
  }

}