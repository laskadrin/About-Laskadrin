import { Component } from '@angular/core';

@Component({
  selector: 'app-completed-games',
  templateUrl: './completed-games.component.html',
  styleUrls: ['./completed-games.component.scss']
})
export class CompletedGamesComponent {
  witcher = ['The Witcher: Enhanced Edition', 'The Witcher 2: Assassins of Kings - Enhanced Edition', 'The Witcher 3: Wild Hunt - Complete Edition',]
  others = ['Detroit: Become Human', 'SOMA', 'Death Stranding']
}
