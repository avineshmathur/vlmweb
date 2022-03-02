import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Config} from './../index';
import { RegisterService } from '@modules/charts/services';

@Component({
  selector: 'sb-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit {
  clients: any;
  resData: any;
  constructor(
    private router : Router,
    private registerService: RegisterService, 
  ) { }
  
  ngOnInit() {
  
    this.getUsers();
  }
  getUsers() {
    this.clients = Config.DummyData;
    this.registerService.getClients().then((result) => {
        this.resData = result;
        console.log("the data");
        console.log(this.resData);
       // this.clients = this.resData.data;
      //  this.dtTrigger.next();
        },error => {
       // this.spinner.hide();
       // this.loading = false;
        //this.changePasswordForm.reset();
        //this.toastr.error(error);
    });
  }

}
