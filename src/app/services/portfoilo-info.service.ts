import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>(`${this.baseUrl}/aboutMe`);
  }

  getHero(): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/hero`);
  }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${this.baseUrl}/goals`);
  }

  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`${this.baseUrl}/certificates`);
  }


 

  getContactInfo(): Observable<ContactInfo> {
    return this.http.get<ContactInfo>(`${this.baseUrl}/contact`);
  }
}