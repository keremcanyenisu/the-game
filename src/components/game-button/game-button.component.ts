import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.scss']
})
export class GameButtonComponent implements OnInit {

  constructor() { }
  @Input() name:string = "";

  ngOnInit() {
  }

}
