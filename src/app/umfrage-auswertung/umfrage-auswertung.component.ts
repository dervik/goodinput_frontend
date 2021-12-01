import { Component, OnInit } from '@angular/core';
import { UMFRAGEN } from '../data/umfragen';
import { Umfrage } from '../data/interfaces';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-umfrage-auswertung',
  templateUrl: './umfrage-auswertung.component.html',
  styleUrls: ['./umfrage-auswertung.component.scss']
})
export class UmfrageAuswertungComponent implements OnInit {
  umfragen: Umfrage[] = [];
  id = Number(this.route.snapshot.paramMap.get('id'));
  

  getUmfragen(id: number): Observable<Umfrage[]> {
    const umfragen = UMFRAGEN.filter(h => h.projectID === id)!;
    return of(umfragen);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{ ticks: { min: 1, max: 7, }, scaleLabel: {display: true, labelString: 'Zufriedenheit'} }],
      yAxes: [{ ticks: { min: 1, max: 7, }, scaleLabel: {display: true, labelString: 'Umsetzung'} }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = false;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 4, y: 3, r: 70 },
      ],
      label: 'Boden',
    },
    {
      data: [
        { x: 3, y: 5, r: 50 },
      ],
      label: 'Tisch',
    },
    {
      data: [
        { x: 1.5, y: 2, r: 10 },
      ],
      label: 'Fleck',
    },
    {
      data: [
        { x: 3, y: 3, r: 45 },
      ],
      label: 'Gang',
    }
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'rgba(255, 0, 0, 0.5)',
      ]
    },
    {
      backgroundColor: [
        'rgba(0, 255, 0, 0.5)',
      ]
    },
    {
      backgroundColor: [
        'rgba(0, 0, 255, 0.5)'
      ]
    },
    {
      backgroundColor: [
        'rgba(0, 255, 255, 0.5)'
      ]
    }
  ];
  
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getUmfragen(this.id).subscribe(umfragen => this.umfragen = umfragen);
  }

}