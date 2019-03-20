import { Component, OnInit } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  public emptyHeart: string = '/assets/empty_heart.png'
  public fullHeart: string = '/assets/full_heart.png'
  public hearts: Heart[] = [
    new Heart(false),
    new Heart(false),
    new Heart(true),
  ]

  constructor() { }

  ngOnInit() { }
}
