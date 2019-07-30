import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {

  constructor() { }

   @Input() color 

  ngOnInit() {
  }

first_name = 'miri'
last_name = 'lerner'

}
