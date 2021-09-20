import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS

  constructor() { }

  ngOnInit(): void {
  }

}
