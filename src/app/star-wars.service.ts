import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {

  constructor(private _http: Http) { }

  getCharacters = (): Observable<any> => {
    return this._http.get('https://swapi.co/api/people/')
      .map( c => c.json() )
  }

}
