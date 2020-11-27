import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-input',
  templateUrl: './game-input.component.html',
  styleUrls: ['./game-input.component.scss']
})
export class GameInputComponent implements OnInit {

  constructor() { }

  @Output() inputValue = new EventEmitter<any>();

  public value = "";
  ngOnInit() {

  }

  onKey(event: KeyboardEvent) {
    this.value = (event.target as HTMLInputElement).value 
    this.inputValue.emit(this.value);
  }
  
}

