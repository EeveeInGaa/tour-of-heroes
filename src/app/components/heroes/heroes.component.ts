import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  heroesObs: Observable<Hero[]> = new Observable<Hero[]>();
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
      private readonly heroService: HeroService
    ) {
    this.heroesObs = this.heroService.getHeroes();

    this.heroService.getHeroes().pipe(take(1)).subscribe((heroes) => {
      console.log('Change Value', heroes);
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  addHero(): void {
    this.heroService.addHero();
  }

}