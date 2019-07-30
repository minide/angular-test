import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {

  constructor() { }

  @Input() bg

  ngOnInit() {
  }

item1 = 'bear'
item2 = 'bird'
item3 = 'cow'

}
