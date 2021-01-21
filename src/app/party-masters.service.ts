import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from './party'
// import Http from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class PartyMastersService {

  productURL: any
  users: [
    {
      "id": 1,
      "name": "abc",
      "address": "bhiwandi",
      "state": "maharashtra",
      "telephone": 9876534567,
      "number": 8756473678,
      "proprietal": 8347338,
      "drug no": "dasjj99",
      "food": "ghhsd67",
      "email": "abc@gmail.com"
    }
  ]
  JSONDatas: any = []
  i = 0
  localStorageKey = 'userArray'

  constructor() { }

  storeData(obj): Observable<any> {

    if (localStorage.length == 0) {
      localStorage.setItem("Id", "0");
    }

    var currentCount = parseInt(localStorage.getItem("Id"));
    localStorage.setItem("Id", (currentCount + 1).toString());
    localStorage.setItem("LastUser", JSON.stringify(obj.value))

    this.JSONDatas = [
      {
        id: currentCount,
        name: obj.value.name,
        address: obj.value.address,
        state: obj.value.state,
        telephone: obj.value.telephonenumber,
        mobile: obj.value.mobile,
        proprietal: obj.value.proprietalName,
        drug_no: obj.value.druglicence,
        food: obj.value.food,
        email: obj.value.email,
        gstNo:obj.value.gstNo
      }
    ]
    let userArray;
    if (localStorage.getItem(this.localStorageKey) == null) {

      userArray = [];
    } else {
      userArray = JSON.parse(localStorage.getItem(this.localStorageKey));
    }

    userArray.push(this.JSONDatas);
    localStorage.setItem(this.localStorageKey, JSON.stringify(userArray));

    return obj
  }

  getData(id):any {
    // localStorage.getItem()
     id = 0
    if (localStorage['userArray']) {
      this.JSONDatas = JSON.parse(localStorage.getItem('userArray'))
      // console.log(this.JSONDatas[id], "user")
    }
   
    //  this.JSONDatas = JSON.parse(localStorage.getItem('userArray'))
    //   console.log(this.JSONDatas[id], "user")
      return this.JSONDatas[id]

   
  }
  getLastArray() {
    var archive = [],
    keys = Object.keys(localStorage),
    i = 2, key;
    // console.log(keys.length-1)
  // console.log(keys,i,"last")
  for (; key = keys[i]; i--) {
    this.JSONDatas.push(localStorage.getItem(key));
  }
  var lastdata = this.JSONDatas
  console.log(lastdata)
  return lastdata;
  }
  getNextArray() {
    // if (localStorage['userArray']) {
    //   this.JSONDatas = JSON.parse(localStorage.getItem('userArray'))
    //   console.log(this.JSONDatas)
    // }
    this.i = this.i + 1;
    this.i = this.i % this.JSONDatas.length;
    return this.JSONDatas[this.i];

  }
  getPrevoiusArray() {

    if (this.i === 0) {
      this.i = this.JSONDatas.length;
    }
    this.i = this.i - 1;
    return this.JSONDatas[this.i];
  }

}


// store data in temporary error and show data in page 