import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { RegisterService } from '@modules/charts/services';
import {Config} from './../index';
@Component({
  selector: 'sb-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {

  TransferRegister: FormGroup;
  loading: boolean = false;
  messages: any;
  showErrors: number = 0;
  submitt:boolean;
  resData: any;
  clients: any;

  backclicked() {
    if(confirm("Are you sure to Back ")) {
      this._location.back();
    }
  }
  constructor( private formBuilder: FormBuilder,
    private router : Router,
    private _location: Location,
    private registerService: RegisterService, 
    ) { }

  ngOnInit() {
    this.getUsers();
    this.TransferRegister =this.formBuilder.group({
      engineNumber: [''],
      chassisNumber: ['', [Validators.required ]],
      invoiceAmount: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      aadharNumber: ['', [Validators.required]],
      addressProof: ['', [Validators.required]],
      insurerCompany: ['', [Validators.required]],
      insuredAmount: ['', [Validators.required]],
      validTill: ['', [Validators.required]],
      form20: ['', [Validators.required]],
      form21: ['', [Validators.required]],
      temporaryRegistration: ['', [Validators.required]],
      insuranceDoc: ['', [Validators.required]],
      id: ['', [Validators.required ]],
    //  name: ['', [Validators.required ]],
      dob: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      mobilenumber:['',[Validators.required]]
  });
  
  this.TransferRegister.patchValue({
    engineNumber: this.clients.vehicleDetails.engineNumber,
    chassisNumber:this.clients.vehicleDetails.chassisNumber
  
  });
  }
 submit() {
    this.submitt = true;

    // stop here if form is invalid
    if (this.TransferRegister.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n');
}
getUsers() {
  this.clients = Config.DummyDataSingle[0];
  console.log(this.clients.vehicleDetails.engineNumber);
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
