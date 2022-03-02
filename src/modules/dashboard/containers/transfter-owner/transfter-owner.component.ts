import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Config} from '../index'

@Component({
  selector: 'sb-transfter-owner',
  templateUrl: './transfter-owner.component.html',
  styleUrls: ['./transfter-owner.component.scss']
})
export class TransfterOwnerComponent implements OnInit {

  Transferowner: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  messages: any;
  resData: any;
  columns: any;
  constructor( private formBuilder: FormBuilder,
    private router : Router,) { }

  ngOnInit() {
    this.getUsers();
    this.Transferowner = this.formBuilder.group({
      chassisNumber: ['', [Validators.required ]],
      
    });
  }
    getUsers() {
      this.columns = Config.DummyData;
    }
  
}
