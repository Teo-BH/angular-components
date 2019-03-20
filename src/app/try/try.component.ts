import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit, OnChanges {

  public emptyHeart: string = '/assets/empty_heart.png'
  public fullHeart: string = '/assets/full_heart.png'
  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]
  @Input()
  public tryValue: number = 0

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.tryValue > 0 && this.tryValue !== this.hearts.length) {
      let i = this.hearts.length - this.tryValue
      this.hearts[i - 1].full = false
    }
  }
}
