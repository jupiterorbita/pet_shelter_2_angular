import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

console.log('pet.service.ts > PAGE');

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private _http: HttpClient) { console.log('pet.service.ts > constructor'); }


  createNew(myNewPet) {
    console.log(' > PET.SERVICE.ts > createNew(myNewPet)');
    return this._http.post('/pets/new', myNewPet);
  }

  get_all() {
    console.log(' > PET.SERVICE.ts > get_all()');
    return this._http.get('/pets');
  }

  get_One(id) {
    console.log(' > PET.SERVICE.ts > get_One(id)');
    return this._http.get('/pets/' + id);
  }

  update(id, pet) {
    console.log(' > PET.SERVICE.ts > update(id, pet)');
    return this._http.put('/pets/' + id + '/edit', pet);
  }

  delete(id) {
    console.log(' > PET.SERVICE.ts > delete(id)');
    return this._http.delete('/delete/' + id);
  }
}
