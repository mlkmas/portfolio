import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Skill { id: number; name: string; logo: string; }

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private baseUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<any>(this.baseUrl).pipe(map(data => data['skills']));
  }
}
