import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from "../mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
