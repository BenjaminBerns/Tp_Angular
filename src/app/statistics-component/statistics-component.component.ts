import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-statistics-component',
  imports: [BrowserModule, // Requis pour les animations des graphiques
    NgxGraphModule],
  templateUrl: './statistics-component.component.html',
  styleUrl: './statistics-component.component.css'
})
export class StatisticsComponentComponent {

}
