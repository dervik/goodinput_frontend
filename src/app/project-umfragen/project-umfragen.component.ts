import { Component, OnInit } from '@angular/core';
import { UMFRAGEN } from '../data/umfragen';
import { Umfrage } from '../data/interfaces';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-project-umfragen',
  templateUrl: './project-umfragen.component.html',
  styleUrls: ['./project-umfragen.component.scss']
})
export class ProjectUmfragenComponent implements OnInit {
  umfragen: Umfrage[] = [];
  id = Number(this.route.snapshot.paramMap.get('id'));
  

  getUmfragen(id: number): Observable<Umfrage[]> {
    const umfragen = UMFRAGEN.filter(h => h.projectID === id)!;
    return of(umfragen);
  }

  goBack(): void {
    this.location.back();
  }

  lineChartData = [{
    label: 'Zufriedenheit',
    data: [5.4, 3.2, 5.8],
    borderWidth: 1,
    fill: false
  }];

  lineChartLabels = ["07.08.2021", "21.08.2021", "04.09.2021"];

  lineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: true
    },
    elements: {
      point: {
        radius: 5
      }
    }
  };

  lineChartColors = [
    {
      borderColor: 'rgba(255,99,132,1)'
    }
  ];

  
  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }
  
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getUmfragen(this.id).subscribe(umfragen => this.umfragen = umfragen);
  }

}
