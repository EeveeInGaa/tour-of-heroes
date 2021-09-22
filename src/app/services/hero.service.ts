import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from "../mock-heroes";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
