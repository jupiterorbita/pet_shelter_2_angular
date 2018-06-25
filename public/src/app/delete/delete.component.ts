import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

console.log('EDIT:: delete.components.ts > loadpage');

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  pet: any;
  msg: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _petService: PetService
  ) {}

  ngOnInit() {
    console.log('EDIT:: delete.component.ts > ngOnInit()');
    this._route.params.subscribe((params: Params) => {
      const get_oneObs = this._petService.get_One(params['id']);
      get_oneObs.subscribe(server_response => {
        console.log('EDIT:: delete.Component > ngOnInit > get_One(..) => server_response =>', server_response);
        this.pet = server_response['data'];
      });
    });
  }

  goToDetails(id) {
    this._router.navigate(['/pets/' + id]);
  }

  update() {
    console.log('EDIT:: delete.component.ts > update()');
    const updateObs = this._petService.update(this.pet._id, this.pet);
    updateObs.subscribe(
      server_response => {
        if (server_response['error']) {
          this.msg = server_response['error']['message'];
          console.log(
            'Component > editComponent > update() >> error >msg: ', this.msg);
        } else {
          this.msg = '';
          this.goToDetails(this.pet._id);
        }
        console.log('Component > editComponent > update() >> server_response', server_response);
      },
      err => {
        console.log('ERROR: ', err);
      }
    );
  }
}
