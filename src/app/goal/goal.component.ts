import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  // template:'<h1>{{title}}</h1>',
  // styles:[`
  // h1{
  //   color:blue
  // }`]
})
export class GoalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  receiveMessage(msg: string) {
    alert(msg);
  }
 
}
