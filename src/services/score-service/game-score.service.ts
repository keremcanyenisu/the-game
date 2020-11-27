import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameScoreService {

  constructor() { }

  public localStorageData: any = {};
  saveScore(username: string, score: number, time: number) {

    let allScores = this.getAllScores();

    let userScores = allScores[username] || [];

    if (userScores.length < 3) {
      let newScoreData = {
        score: score,
        time: time
      };
      userScores.push(newScoreData);
    }

    else if (userScores.length == 3){
      const minScoreIndex = userScores.findIndex((x: any) => x.score === Math.min(...userScores.map((y: any) => y.score)));
      const userMinScoreData = userScores[minScoreIndex];
      if (userMinScoreData.score < score || (userMinScoreData.score === score && userMinScoreData.time > time)){
        userScores.splice(minScoreIndex, 1);
        let newScoreData = {
          score: score,
          time: time
        };
        userScores.push(newScoreData);
      }
    }

    allScores[username] = userScores;

    let serilizeLocalStorage = JSON.stringify(allScores);
    localStorage.setItem('allScores', serilizeLocalStorage);
    console.log(localStorage.getItem('allScores'));
  }

  getAllScores() {
    let existingStorage: any = localStorage.getItem('allScores');
    if (existingStorage) {
      let existingScoreData = JSON.parse(existingStorage);
      return existingScoreData;
    }
    return {};
  }

}

