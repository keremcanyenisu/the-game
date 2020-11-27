import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @Input() userNameCallback = (username:string) => {};
  @Input() title:string = "Enter your Username";
  @Input() name:string = "Username";

  public buttonName:string = "Submit";
  public username:string = "";
  constructor() { }

  ngOnInit() {
  }

  getInputValue(event:any){
     this.username = event;
  }

  getUserName(){
    this.userNameCallback(this.username);
  }

}
