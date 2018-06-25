import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

console.log('> create.component.ts >');

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  msg: any;
  newPet: any;

  constructor(
    private _petService: PetService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('> create.component.ts > ngOnInit');
  }

  goHome() {
    this._router.navigate(['/home']);
  }



  create(myform: NgForm) {
    console.log('> create.component.ts > create(myform)');
    this.newPet = myform.value;
    console.log('> create.component.ts > create(myform) > this.newPet =>', this.newPet);
    const newPetObservable = this._petService.createNew(this.newPet);
    newPetObservable.subscribe(
      server_response => {
        console.log('createComponent > create(myform: NgForm) > server_response =>', server_response);
        if (server_response['error_create']) {
          this.msg = server_response['error_create']['message'];
        } else {
          this.msg = '';
          this.goHome();
        }
      }
    );
  }

}
