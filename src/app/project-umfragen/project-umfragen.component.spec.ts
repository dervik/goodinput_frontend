import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUmfragenComponent } from './project-umfragen.component';

describe('ProjectUmfragenComponent', () => {
  let component: ProjectUmfragenComponent;
  let fixture: ComponentFixture<ProjectUmfragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUmfragenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUmfragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
