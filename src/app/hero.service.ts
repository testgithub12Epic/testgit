import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl= '/api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private messageService: MessageService,
              private http: HttpClient          
    ) { }

  getLocalHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  ///////////
  getRemoteHeroes(): Observable<Hero[]> {
    
    return this.http.get<Hero[]>(this.heroesUrl);
  }


  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}