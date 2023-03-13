import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareComponent } from './hardware/hardware.component';
import { DonateComponent } from './donate/donate.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CompletedGamesComponent } from './completed-games/completed-games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ValuesPipe } from './hardware/values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HardwareComponent,
    DonateComponent,
    AboutMeComponent,
    CompletedGamesComponent,
    ValuesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
