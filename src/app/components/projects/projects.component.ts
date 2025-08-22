import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }
}
