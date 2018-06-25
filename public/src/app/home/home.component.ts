import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';

console.log('home.component.ts > page');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pets_arr: any;

  constructor(private _petService: PetService) { }

  ngOnInit() {
    console.log('Component > HomeComponent > ngOnInit');
    this.getAll();
  }

  getAll() {
    console.log('home.component > getAll()');
    const getallObs = this._petService.get_all();
    getallObs.subscribe(
      server_response => {
        console.log('home.component > getAll() > server_response =>', server_response);
        this.pets_arr = server_response['data'];
        console.log('home.component > getAll() > this.pets_arr =>', this.pets_arr);
      });
  }
}
