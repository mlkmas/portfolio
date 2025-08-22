import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private baseUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<any>(this.baseUrl).pipe(map(data => data['projects']));
  }
}
