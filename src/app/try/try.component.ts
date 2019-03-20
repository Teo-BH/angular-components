import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public emptyHeart: string = '/assets/empty_heart.png'
  public fullHeart: string = '/assets/full_heart.png'
}
