import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes(this);
  }

  getHeroes(pointer: DashboardComponent): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        console.log('heroes >>>', heroes);
        return this.heroes = heroes.slice(1, 5)
      });
  }
}