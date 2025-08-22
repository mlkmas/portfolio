import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioInfoService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioInfoService: PortfolioInfoService) {}

  ngOnInit(): void {
    this.portfolioInfoService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}