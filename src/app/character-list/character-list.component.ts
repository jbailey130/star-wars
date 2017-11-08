import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterListComponent implements OnInit {

  characters;

  constructor(private _service: StarWarsService) { }

  ngOnInit() {
    this._service.getCharacters().subscribe(
      characters => {this.characters = characters.results},
      err =>  {},
      () => { console.log('finally'); }
    )
  }

}
