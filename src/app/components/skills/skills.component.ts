import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skill';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent implements OnInit {
skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }
}
