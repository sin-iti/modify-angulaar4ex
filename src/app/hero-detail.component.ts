import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'hero-detail',
  template: `
     <div *ngIf="hero">
      <h2>{{hero.name}} Details!</h2>
      <div>
        <label>id:</label>
        <span>{{hero.id}}</span>
      </div>
      <div>
        <label>name:</label>
        <input type="text" [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
    @Input() hero:Hero;
}
