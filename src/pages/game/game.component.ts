import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameFormComponent } from 'src/components/game-form/game-form.component';
import { GameScoreService } from 'src/services/score-service/game-score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private modalService: NgbModal, private gameScoreService : GameScoreService) { }
  public higherButton = "Higher";
  public lowerButton = "Lower";
  public playAgainButton = "Play Again?";
  public playButton ="Play!";
  public generatedNumber:number = 0;
  public maxScore=10;
  public userScore = 0;
  public isFinished:boolean = false;
  public showPopUp:boolean = false;
  public username:string = "";
  public time:number = 0;
  public isPlay=true;
  closeResult = '';


  ngOnInit() {
    this.numberGenerator();
  }

  numberGenerator(){
    this.generatedNumber = Math.floor((Math.random() * 100) + 1);
    
  }

  play(){
    this.time = new Date().getMilliseconds();
    this.isPlay = false;
  }
  
  playAgain(){
    this.time = new Date().getMilliseconds();
    this.isFinished = false;
  }

  checkNumberIsLower(){
    let oldGeneratedNumber = this.generatedNumber;
    this.numberGenerator();
    if(this.userScore == this.maxScore){
      this.gameScoreService.saveScore(this.username,this.userScore,this.time);
      alert("Congrats!");
      this.isFinished =true;
      this.userScore = 0;
    }

    if(this.generatedNumber < oldGeneratedNumber){
       this.userScore = this.userScore + 1;
       if(this.userScore == 2 && this.username == ""){
        this.userPopUp();
      }
    }

    else {
      alert("Game Over");
      if(this.username != "" && this.userScore != 0){
        this.gameScoreService.saveScore(this.username,this.userScore,this.time);
      }
      this.isFinished =true;
      this.userScore = 0;
    }
     
  }

  checkNumberIsHigher(){
    let oldGeneratedNumber = this.generatedNumber;
    this.numberGenerator();

    if(this.userScore == this.maxScore){
      this.gameScoreService.saveScore(this.username,this.userScore,this.time);
      alert("Congrats!");
      this.isFinished =true;
      this.userScore = 0;
    }

    if(this.generatedNumber >  oldGeneratedNumber ){
       this.userScore = this.userScore + 1;

       if(this.userScore == 2  && this.username == ""){
         this.userPopUp();
       }
    }

    else {
      alert("Game Over");
      if(this.username != ""  && this.userScore != 0){
        this.gameScoreService.saveScore(this.username,this.userScore,this.time);
      }
      this.isFinished =true;
      this.userScore = 0;
    }
  }

  userPopUp(){
      let modalRef = this.modalService.open(GameFormComponent);
      modalRef.componentInstance.userNameCallback = (username:string) => {
        console.log("username",username);
        this.username = username;
        this.modalService.dismissAll();
      } 
  }
}


