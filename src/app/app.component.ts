import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inProgress: boolean = true
  public finishAppText: string

  public finishApp(text: string) {
    this.finishAppText = text
    this.inProgress = false
  }
}
