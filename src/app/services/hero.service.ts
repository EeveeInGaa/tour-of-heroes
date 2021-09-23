import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from "../mock-heroes";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList: Hero[] = HEROES;

  getHeroes(): Observable<Hero[]> {
    return of(this.heroList);
  }


  addHero(): void {
    const newHero: Hero = {
      id: this.heroList[this.heroList.length - 1].id + 1,
      name: 'Random' + Math.trunc(Math.random() * 100)
    };

    this.heroList.push(newHero);
  }
}
