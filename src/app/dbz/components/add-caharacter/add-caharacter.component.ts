import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.Interface';

@Component({
  selector: 'dbz-add-caharacter',
  templateUrl: './add-caharacter.component.html',
  styleUrl: './add-caharacter.component.css'
})
export class AddCaharacterComponent {

@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();


emitCharacter(): void {
console.log(this.character);
if (this.character.name.length ===0) return;

this.onNewCharacter.emit(this.character)

}

public character: Character = {
  name:'',
  power:0,
};



}
