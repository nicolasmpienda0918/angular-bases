import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor' ]

 public deletedHero?:string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }

}
