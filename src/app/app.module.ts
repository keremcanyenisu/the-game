import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from 'src/pages/game/game.component';
import { GameButtonComponent } from 'src/components/game-button/game-button.component';
import { FormsModule } from '@angular/forms';
import { GameFormComponent } from 'src/components/game-form/game-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameInputComponent } from 'src/components/game-input/game-input.component';
import { GameScoreService } from 'src/services/score-service/game-score.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameButtonComponent,
    GameFormComponent,
    GameInputComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    GameScoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
