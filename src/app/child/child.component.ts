import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
   @Output() messageEvent = new EventEmitter<string>();
  // @Output() messageEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit('Hi Hughes')
    // console.log('Hi Hughes');
  }
}
