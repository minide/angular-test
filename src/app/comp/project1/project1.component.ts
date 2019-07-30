import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() bg
  @Input() word1
  @Input() word2


  yellow = 'sun'

}
