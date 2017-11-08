import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterComponent implements OnInit {

  @Input() character;
  
  constructor() { }

  ngOnInit() {
  }

}
