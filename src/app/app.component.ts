import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
    imports: [
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    HeaderComponent,
    AboutMeComponent,
    ContactComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true 

})
export class AppComponent {
  title = 'portfolio';
}

