import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface AboutMe {
  id: number;
  title: string;
  text: string;
  extendedText: string;
}

export interface Hero {
  id: number;
  title: string;
  subtitle: string;
}

export interface Goal {
  id: number;
  title: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  logo?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  cvUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioInfoService {
  private baseUrl = 'assets/db.json'; // your JSON file

  constructor(private http: HttpClient) {}

  private fetchSection<T>(section: string): Observable<T> {
    return this.http.get<any>(this.baseUrl).pipe(
      map(data => data[section])
    );
  }

  getAboutMe(): Observable<AboutMe> {
    return this.fetchSection<AboutMe>('aboutMe');
  }

  getHero(): Observable<Hero> {
    return this.fetchSection<Hero>('hero');
  }

  getGoals(): Observable<Goal[]> {
    return this.fetchSection<Goal[]>('goals');
  }

  getCertificates(): Observable<Certificate[]> {
    return this.fetchSection<Certificate[]>('certificates');
  }

  getContactInfo(): Observable<ContactInfo> {
    return this.fetchSection<ContactInfo>('contact');
  }
}
