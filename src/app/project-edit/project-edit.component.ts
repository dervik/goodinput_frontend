import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../data/projects';
import { Project } from '../data/interfaces';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  id = Number(this.route.snapshot.paramMap.get('id'));
  project : Project;

  goBack(): void {
    this.location.back();
  }

  getProject(id: number): Observable<Project> {
    const project = PROJECTS.find(h => h.projectID === id)!;
    return of(project);
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProject(this.id).subscribe(project => this.project = project);
  }

}
