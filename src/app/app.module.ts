import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CounterModulo } from './counter/components/counter.module';
import { HeroesModule } from './heros/heroes.module';




@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModulo,
    HeroesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
