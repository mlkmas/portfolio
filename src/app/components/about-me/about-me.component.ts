import { Component, OnInit } from '@angular/core';
import { PortfolioInfoService, AboutMe } from '../../services/portfoilo-info.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe!: AboutMe;

  constructor(private infoService: PortfolioInfoService) {}

  ngOnInit(): void {
    this.infoService.getAboutMe().subscribe(data => {
      this.aboutMe = data;
    });
  }
}