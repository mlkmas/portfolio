import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Skill } from '../models/skill';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

   private baseUrl = 'http://localhost:3000/skills';

  constructor(private http: HttpClient) {}

   getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl);
  }
}
