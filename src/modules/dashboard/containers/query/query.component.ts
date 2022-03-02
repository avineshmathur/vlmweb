import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Config} from './../index';
import { RegisterService } from '@modules/charts/services';

@Component({
  selector: 'sb-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})

export class QueryComponent implements OnInit {
  QuerySearchForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  messages: any;
  resData: any; 
  clients: any;
  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private registerService: RegisterService, 
  ) { }
  
  ngOnInit() {
  
   // this.getUsers();
    this.QuerySearchForm = this.formBuilder.group({
      chassisNumber: ['', [Validators.required ]],
      
    });
  }
  attributes: any = {
    'chassisNumber':'',
  };
  validationMessages: any = {
    'chassisNumber': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
    },
};
submit() { //console.log(this.QuerySearchForm);
  this.loading = true;
   this.showErrors = 1;
  const form = this.QuerySearchForm;
  for (const field in this.attributes) {
      this.attributes[field] = '';
      const control = form.get(field);
      if (control && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
            if (this.attributes[field] == '') {
                this.attributes[field] += messages[key] + ' ';
            }
        }
      }
  }
  if (this.QuerySearchForm.valid) {
    this.showErrors = 0;
   // this.clients = Config.DummyData;
     // this.spinner.show();
      const form = this.QuerySearchForm;
        // const formData: FormData = new FormData();      
       
        // formData.append('chassisNumber', this.QuerySearchForm.get('chassisNumber')?.value);
       
             const searchData={
               "chassisNumber":this.QuerySearchForm.get('chassisNumber')?.value
             }
       // this.QuerySearchForm.reset();
       
        this.registerService.queryRecordByChassisNumber(searchData).then((result) => {
          //this.spinner.hide();
            this.loading = false;
            if(result && result != ''){
              this.resData = result;
              this.clients = this.resData.data;
             
              //  this.toastr.success(result['message']);	
              }else{
               // this.toastr.success(Config.RESET_PASSWORD_SUCCESS_MSG);
              }
             
              this.router.navigate(['dashboard/query']);
             
              this.QuerySearchForm.reset();
              
            },error => {
           // this.spinner.hide();
            this.loading = false;
        //this.toastr.error(error);
         });
  }else{
      this.loading = false;
    }
}
getUsers() {
  this.clients = Config.DummyData;
  // this.registerService.queryRecordByChassisNumber().then((result) => {
  //     this.resData = result;
  //     console.log("the data");
  //     console.log(this.resData);
  //    // this.clients = this.resData.data;
  //   //  this.dtTrigger.next();
  //     },error => {
  //    // this.spinner.hide();
  //    // this.loading = false;
  //     //this.changePasswordForm.reset();
  //     //this.toastr.error(error);
  // });
}
}
