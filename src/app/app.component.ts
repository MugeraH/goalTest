import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Goals';
  // title = 'Goals';
  goals: string[] = [];
  constructor (){
    this.goals= ["hm","jm","lo"]
  }

  // constructor (id:number,name:string){
  //   public this.id=id;
  //   this.name=name

  // }

}
