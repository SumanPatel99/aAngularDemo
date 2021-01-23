import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import Http from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class PartyMastersService {

  productURL: any
  JSONDatas: any = []
  i = 0
  localStorageKey = 'userArray'

  constructor() { }

  storeData(obj): Observable<any> {
    localStorage.setItem("LastUser", JSON.stringify(obj.value))

    if (localStorage.length == 1) {
      localStorage.setItem("Id", "1");
    }

    var currentCount = parseInt(localStorage.getItem("Id"));
    localStorage.setItem("Id", (currentCount + 1).toString());


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
        gstNo: obj.value.gstNo
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

  getData(id): any {
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
    if (localStorage['LastUser']) {
      this.JSONDatas = JSON.parse(localStorage.getItem('LastUser'))
    }
      console.log(this.JSONDatas, "last servic")
    return this.JSONDatas
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