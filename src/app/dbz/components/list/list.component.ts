import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
    }]
  // onDelete = index value: number;
  @Output()
    // public onDelete: EventEmitter<string> = new EventEmitter(); este fue el profesor
   public onDelete = new EventEmitter<string>(); //este fui yo

  /**este metodo es del componente padre */
  //onDeleteCharacterx(index: number): void {
    // console.log(index);
  //this.onDelete.emit(index);

  //tarea clase 69
  onDeleteCharacterx(id?: string):void {

    if (!id) return;
    this.onDelete.emit(id);

  }
}
