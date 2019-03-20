import { Component, OnInit } from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrase.mock'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { 
    console.log(this.phrases)
  }

  ngOnInit() {
  }

  public phrases: Phrase[] = PHRASES
  public title: string = "Traduza a expressão:"
  
}
