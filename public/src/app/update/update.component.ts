import { PetService } from './../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  pet: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _petService: PetService
  ) { }

  ngOnInit() {
    console.log('DETAILS:: update.component.ts > ngOnInit()');
    this._route.params.subscribe((params: Params) => {
      const get_oneObs = this._petService.get_One(params['id']);
      get_oneObs.subscribe(server_response => {
        console.log('EDIT:: delete.Component > ngOnInit > get_One(..) => server_response =>', server_response);
        this.pet = server_response['data'];
      });
    });
  }

  // or put the id from the html sice we already have the obj to pass it in expl
  delete() {
    console.log('> DETAILS :: update.conponent.ts > delete()');
    const delObs = this._petService.delete(this.pet._id);
    delObs.subscribe((server_response) => {
      console.log('component > detailsComponent > remove(' + this.pet._id + ') > server_response =>', server_response);
      this._router.navigate(['/home']);
    });
  }

}
