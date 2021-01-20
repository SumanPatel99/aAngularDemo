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

  storeData(obj, id): Observable<any> {

    if (localStorage.length == 0) {
      localStorage.setItem("Id", "0");
    }

    var currentCount = parseInt(localStorage.getItem("Id"));
    localStorage.setItem("Id", (currentCount + 1).toString());
    localStorage.setItem("users", JSON.stringify(obj.value))

    this.JSONDatas = [
      {
        id: currentCount,
        name: obj.value.name,
        address: obj.value.address,
        state: obj.value.state,
        telephone: obj.value.telephonenumber,
        number: obj.value.number,
        proprietal: obj.value.proprietalName,
        drug_no: obj.value.druglicence,
        food: obj.value.food,
        email: obj.value.email
      }
    ]
    let userArray;
    if (localStorage.getItem(this.localStorageKey) === null) {

      userArray = [];
    } else {
      userArray = JSON.parse(localStorage.getItem(this.localStorageKey));
    }

    userArray.push(this.JSONDatas);
    localStorage.setItem(this.localStorageKey, JSON.stringify(userArray));

    // localStorage.setItem("name", obj.value.name)
    // localStorage.setItem("address", obj.value.address)
    // localStorage.setItem("email", obj.value.email)
    // localStorage.setItem("state", obj.value.state)
    // localStorage.setItem("telNo", obj.value.telephonenumber)
    // localStorage.setItem("mobile", obj.value.number)
    // localStorage.setItem("proprietal", obj.value.proprietalName)
    // localStorage.setItem("drug No.", obj.value.druglicence)
    // localStorage.setItem("Food Lic No", obj.value.food)
    // localStorage.setItem("GST No", obj.value.gstNo)

    return obj
  }

  getData(id):any {
    // localStorage.getItem()
    id = 0
    if (localStorage['userArray']) {
      this.JSONDatas = JSON.parse(localStorage.getItem('userArray'))
      console.log(this.JSONDatas[id], "user")
      var newa = this.JSONDatas[0]
    }

    // var archive = [],
    //   // keys = Object.keys(localStorage),
    //   keys = Object.values(localStorage),
    //   i = 0,j=2, key,id=1;
    //   console.log(keys[2],"keys")
    //   // console.log(keys,i,"last")
    // for (; key = keys[j]; i++) {
    //   archive.push(localStorage.getItem(key));
    // }
    // console.log('return' ,archive)
    // return archive;

  }
  getLastArray(id: any) {
    var archive = [],
      keys = Object.keys(localStorage),
      i = 0, key;
    // console.log(keys,i,"last")
    for (; key = keys[i]; i--) {
      archive.push(localStorage.getItem(key));
    }
    return archive;
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