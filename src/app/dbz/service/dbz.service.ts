import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
    },
    {
    id: uuid(),
    name: 'Vegeta',
    power: 9500
    }];

  addCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);
    /*const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    } esta es una forma*/

    // esta es la otra usando spreed
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter); //con esto agrega el registro
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index,1); //con esto elimina el registro el 1 es para que borre un solo registro sino borra todo o dos no se
  // }

  // en esta tarea le vamos a pasar el id en vez del index
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
    }
}

