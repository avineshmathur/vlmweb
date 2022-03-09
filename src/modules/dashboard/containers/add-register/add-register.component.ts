import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Config} from './../index';
import { RegisterService } from '@modules/charts/services';
import {Location} from '@angular/common';


@Component({
  selector: 'sb-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss']
})
export class AddRegisterComponent implements OnInit {

  AddRegisterForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  messages: any;
  resData: any;
  clients: any;
  regData: any;
  registerDataNew: any;
  myDate: any = '';
  backClicked() {
    if(confirm("Are you sure to Back ")) {
      this._location.back();
    }
    
  }
  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private registerService: RegisterService, 
    private _location: Location,
  ) { }

  ngOnInit() {
    let dte = new Date();
		this.myDate = this.formatDate(dte);
    this.AddRegisterForm = this.formBuilder.group({
      engineNumber: ['', [Validators.required ]],
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
    });
  }
  private formatDate(date) { 
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  attributes = {
    'engineNumber':'',
    'chassisNumber':'',
    'invoiceAmount':'',
    'startDate': '',
    'name': '',
    'dateOfBirth': '',
    'aadharNumber': '',
    'addressProof': '',
    'insurerCompany': '',
     'insuredAmount': '',
    'validTill': '',
    'form20': '',
   'form21': '',
     'temporaryRegistration': '',
     'insuranceDoc': '',
  };
  validationMessages = {
    'engineNumber': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
       // 'pattern': Config.CLNAME_NOT_VALID_MESSAGE
    },
    'chassisNumber': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
    },
    'invoiceAmount': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
    },
    'startDate': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'name': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'dateOfBirth': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'aadharNumber': {
      'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'addressProof': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'insurerCompany': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'insuredAmount': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'validTill': {
      'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'form20': {
      'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  },
  'form21': {
      'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  },
  'temporaryRegistration': {
      'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  },
  'insuranceDoc': {
    'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  }
};
submit() { 
  this.loading = true;
   this.showErrors = 1;
  const form = this.AddRegisterForm;
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
  if (this.AddRegisterForm.valid) {
    console.log("heresfds");
    this.showErrors = 0;
     // this.spinner.show();
      // const form = this.AddRegisterForm;
      //   const formData: FormData = new FormData();      
      //   formData.append('engineNumber', this.AddRegisterForm.get('engineNumber')?.value);
      //   formData.append('chassisNumber', this.AddRegisterForm.get('chassisNumber')?.value);
      //   formData.append('invoicedAmount', this.AddRegisterForm.get('invoiceAmount')?.value);
      //   formData.append('date', this.AddRegisterForm.get('startDate')?.value);
      //   formData.append('name', this.AddRegisterForm.get('name')?.value);
      //   formData.append('dateOfBirth', this.AddRegisterForm.get('dateOfBirth')?.value);        
      //   formData.append('aadharNumber', this.AddRegisterForm.get('aadharNumber')?.value);
      //   formData.append('addressProof', this.AddRegisterForm.get('addressProof')?.value);
      //   formData.append('insurerCompany', this.AddRegisterForm.get('insurerCompany')?.value);
      //   formData.append('insuredAmount', this.AddRegisterForm.get('insuredAmount')?.value);
      //   formData.append('validTill', this.AddRegisterForm.get('validTill')?.value);        
      //   formData.append('form20', this.AddRegisterForm.get('form20')?.value);
      //   formData.append('form21', this.AddRegisterForm.get('form21')?.value);
      //   formData.append('temporaryRegistration', this.AddRegisterForm.get('temporaryRegistration')?.value);
      //   formData.append('insuranceDoc', this.AddRegisterForm.get('insuranceDoc')?.value);
         let postData = {
          "vehicleDetails": {
            "chassisNumber":this.AddRegisterForm.get('chassisNumber')?.value,
            "engineNumber": this.AddRegisterForm.get('engineNumber')?.value,
            "invoicedAmount": this.AddRegisterForm.get('invoiceAmount')?.value,
            "date": this.AddRegisterForm.get('startDate')?.value
        },
        "citizenDetails": {
          "name": this.AddRegisterForm.get('name')?.value,
          "dateOfBirth": this.AddRegisterForm.get('dateOfBirth')?.value,
          "aadharNumber": this.AddRegisterForm.get('aadharNumber')?.value,
          "addressProof":this.AddRegisterForm.get('addressProof')?.value
      },
      "insuranceDetails": {
          "insurerCompany": this.AddRegisterForm.get('insurerCompany')?.value,
          "insuredAmount": this.AddRegisterForm.get('insuredAmount')?.value,
          "validT ill": this.AddRegisterForm.get('validTill')?.value
      },
      "documnetHash": {
          "form20": this.AddRegisterForm.get('form20')?.value,
          "form21": this.AddRegisterForm.get('form21')?.value,
          "temporaryRegistration":this.AddRegisterForm.get('temporaryRegistration')?.value,
          "insuranceDoc": this.AddRegisterForm.get('insuranceDoc')?.value
      }
      }

        this.registerService.saveRegister(postData).then((result) => {
    		//	this.spinner.hide();
        		this.loading = false;
            if(result && result != ''){
          	//	if(result['message'] && result['message'] != ''){
          //			this.toastr.success(result['message']);	
          		}else{
          	//		this.toastr.success(Config.RESET_PASSWORD_SUCCESS_MSG);
              }
             
              this.router.navigate(['superadmin/register']);
             
              this.AddRegisterForm.reset();
              
          	},error => {
        //		this.spinner.hide();
        		this.loading = false;
			//	this.toastr.error(error);
     		});
  }else{
      console.log("here");
      this.loading = false;
    }
}

}
