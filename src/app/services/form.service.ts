import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  JSONDatas: any = []
  image:any
  i = 0
  arr:any
  localStorageKey = 'userData'

  constructor(private Http: HttpClient) { }

  storeData(obj): Observable<any> {
    localStorage.setItem("Form",JSON.stringify(obj.value))
    if (localStorage.length==5) {
      localStorage.setItem("userId", "1");
    }

    var currentCount = parseInt(localStorage.getItem("userId"));
    localStorage.setItem("userId", (currentCount + 1).toString());
    this.arr = localStorage.getItem('image') 
    this.JSONDatas = [
      {
        id:currentCount, 
        name: obj.value.name,
        address1: obj.value.address1,
        address2: obj.value.address2,
        state: obj.value.state,
        mobile: obj.value.mobile,
        city: obj.value.city,
        country: obj.value.country,
        email: obj.value.email,
        subscribe: obj.value.subscribe
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

  getData(id){
    if (localStorage['Form']) {
      this.JSONDatas = JSON.parse(localStorage.getItem('Form'))
      // console.log(this.JSONDatas[id], "user")
    }
    //  this.JSONDatas = JSON.parse(localStorage.getItem('userArray'))
    //   console.log(this.JSONDatas[id], "user")
    return this.JSONDatas
  }
getImage(){
  if(localStorage.getItem('image')){
    this.image = localStorage.getItem('image')
    console.log(this.image,"imshs")
  }
  return this.image
}
  updateImage(record,id,image){
    console.log(this.Http.patch(localStorage.getItem('Form') + record + '/' + id,{image:image}),"hg")
    
    return this.Http.patch(localStorage.getItem('Form') + record + '/' + id,{image:image})

  }
}
