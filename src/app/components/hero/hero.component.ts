import { Component, OnInit } from '@angular/core';
import { PortfolioInfoService, Hero } from '../../services/portfoilo-info.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
    imports: [CommonModule]
})
export class HeroComponent implements OnInit {
  hero!: Hero;

  constructor(private infoService: PortfolioInfoService) {}

  ngOnInit(): void {
    this.infoService.getHero().subscribe(data => {
      this.hero = data;
    });
  }
}