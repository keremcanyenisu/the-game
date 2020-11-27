/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameScoreService } from './game-score.service';

describe('Service: GameScore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameScoreService]
    });
  });

  it('should ...', inject([GameScoreService], (service: GameScoreService) => {
    expect(service).toBeTruthy();
  }));
});
