import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heros'
import { MessageService } from './../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero!:Hero;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { 
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
