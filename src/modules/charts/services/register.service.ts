import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError ,  Observable, timer } from 'rxjs';
import 'rxjs/add/operator/timeout';
import { Router } from '@angular/router';
import {Config} from './index';
@Injectable()
export class RegisterService {


  constructor(
    private http: HttpClient,
        private router: Router,
       
  ) { }
  getHttpOptions(accessToken:any=null,appKey,subDomain:any=null,reqType=null){
    let httpOptions:any = {};
//console.warn(Config.SUBDOMAIN);
//console.warn(accessToken);
    subDomain = JSON.parse(Config.SUBDOMAIN);
    if(accessToken && accessToken.length > 0 && reqType == 'image'){
  //console.warn("inside");
        accessToken = accessToken.replace(/(^"|"$)/g, '');
        httpOptions = {
            headers: new HttpHeaders({ 
                //'Content-Type': 'application/json; charset=utf-8',
      //'Content-Type': undefined,
                //'Accept': 'application/json',
                'Authorization': 'Bearer '+accessToken,
                'appkey': appKey,
      'subDomain': subDomain
            })
        };    
        return httpOptions;
    }else  if(accessToken && accessToken.length > 0){
  //console.warn("outside");
        accessToken = accessToken.replace(/(^"|"$)/g, '');
        httpOptions = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
      'Authorization': 'Bearer '+accessToken,
                'appkey': appKey,
      'subDomain' : subDomain
            })
        };    
        return httpOptions;
    }else{
        httpOptions = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'appKey': appKey,
      'subDomain' : subDomain
            })
        };    
        return httpOptions;
    }
}
getHttpOptionsNew(){
    let httpOptions:any = {};
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json'
           
        })
    };    
    return httpOptions;
}
  saveRegister( postData: any) {
        console.log(postData);
    return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'client/register', postData, this.getHttpOptionsNew())
        . timeout(Config.TIMEOUT_SECONDS).subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
    });
}
getClients() {
    
    return new Promise((resolve, reject) => {
      // this.http.get('https://jsonplaceholder.typicode.com/users', this.getHttpOptionsNew())
      this.http.get(Config.API_BASE_PATH + 'queryAllRecords', this.getHttpOptionsNew()) 
       .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
           // console.log(res);
            resolve(res);
        }, (err) => {
            alert(err.message);
            reject(err);
        });
    });
}
queryRecordByChassisNumber(formData) {
   console.log(formData);
    return new Promise((resolve, reject) => {
       // this.http.get('https://jsonplaceholder.typicode.com/users', this.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
      // this.http.get(Config.API_BASE_PATH+'country-list?subdomain=sms', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
       this.http.post(Config.API_BASE_PATH + 'queryRecordByChassisNumber',formData,this.getHttpOptionsNew()) 
       .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
           // console.log(res);
            resolve(res);
        }, (err) => {
            reject(err);
        });
    });
}
}
