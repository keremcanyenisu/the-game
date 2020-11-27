/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameInputComponent } from './game-input.component';

describe('GameInputComponent', () => {
  let component: GameInputComponent;
  let fixture: ComponentFixture<GameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
