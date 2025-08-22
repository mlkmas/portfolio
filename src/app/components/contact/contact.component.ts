import { Component, OnInit, Renderer2 } from '@angular/core';
import { PortfolioInfoService, ContactInfo } from '../../services/portfoilo-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule]
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo = {
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    cvUrl: ''
  };
  isLoading = true;

  constructor(
    private infoService: PortfolioInfoService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.infoService.getContactInfo().subscribe({
      next: (data) => {
        this.contactInfo = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading contact info:', err);
        this.isLoading = false;
        
        // Fallback data
        this.contactInfo = {
          email: 'malakmasarwe669@gmail.com',
          phone: '+972584036945',
          github: 'https://github.com/mlkmas',
          linkedin: 'https://www.linkedin.com/in/malak-mas-32a79b249/',
          cvUrl: 'cv/malak_resume.pdf'
        };
      }
    });
  }

 downloadCV() {
  const link = this.renderer.createElement('a');
  this.renderer.setAttribute(link, 'target', '_blank');
  this.renderer.setAttribute(link, 'href', this.contactInfo.cvUrl);
  this.renderer.setAttribute(link, 'download', 'malak_resume.pdf');
  
  this.renderer.appendChild(document.body, link);
  link.click();
  this.renderer.removeChild(document.body, link);
}
}