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
    this.currentPhrase = this.phrases[this.index] 
  }

  ngOnInit() { }

  public title: string = "Traduza a expressão:"

  public phrases: Phrase[] = PHRASES
  public index: number = 0
  public currentPhrase: Phrase

  public progress: number = 0
  public responseText: string = ""

  public updateText(sender: Event): void {
    this.responseText = (<HTMLInputElement>(sender.target)).value
  }

  public checkText(): void {
    if (this.currentPhrase.portuguesePhrase == this.responseText) {
      alert('A tradução está correta')
      this.nextPhrase()
      this.responseText = ""
    } else {
      alert('A tradução está errada')
    }
  }

  private nextPhrase() {
    this.index++
    this.progress = this.progress + (100 / this.phrases.length)
    if (this.index >= this.phrases.length) {
      this.index = 0
      this.progress = 0
    }
    this.currentPhrase = this.phrases[this.index] 
  }
  
}
