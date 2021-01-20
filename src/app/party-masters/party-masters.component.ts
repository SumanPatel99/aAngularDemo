import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import {FormBuilder,FormGroup,FormControl,Validators,NgForm, MinLengthValidator} from '@angular/forms' 
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LocalStorageService } from 'ngx-webstorage';
import { PartyMastersService } from '../party-masters.service';
import { Party } from '../party'

@Component({
  selector: 'app-party-masters',
  templateUrl: './party-masters.component.html',
  styleUrls: ['./party-masters.component.css']
})
export class PartyMastersComponent implements OnInit {

  registerForm: FormGroup;

  id: any
  name = ''
  address = ''
  emailId = ''
  telephonenumber = ''
  food = ''
  gstNo = ''
  mobile = ''
  state = ''
  druglicence = ''
  proprietalName = ''
  user: any
  userArray = []
  public JSONDatas: any = [];
  public firstUserArray: any
  constructor(private frm: FormBuilder, private partyService: PartyMastersService) {

  }


  ngOnInit() {

    this.createPartyForm()
    // sessionStorage.setItem("datas", JSON.stringify(this.JSONDatas));


  }

  createPartyForm() {
    this.registerForm = this.frm.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z \-\']+')]],
      address: ['', Validators.required],
      telephonenumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      proprietalName: ['', Validators.required],
      druglicence: ['', Validators.required],
      food: ['', Validators.required],
      gstNo: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20)]],
      state: ['', Validators.required],
    })
  }
  Register(value) {
    console.log("data enter", value.value)
    var service = this.partyService.storeData(value, service)
    console.log("ggg", service)
    this.registerForm.reset()

  }
  firstUser(id): any {

    id = this.userArray
    if (localStorage.getItem('userArray')) {
      console.log(this.partyService.getData(id), "first data")
    }
    else {
      alert("hello")
    }
    id = localStorage.getItem('userArray')
    console.log(this.partyService.getData(id), "first")
    //  let userid =  this.partyService.getData("id")
    //  let finalarr = []
    //  for(let key in id ){
    //    if(id[key]['id']==userid){
    //      finalarr.push(id[key])
    //    }
    //  }
    //  console.log(finalarr,"finak");
    //  this.firstUserArray = finalarr;
    //  console.log(this.firstUserArray, "firt rarra")
    // var getdata = this.partyService.getUserData(id1)
    // console.log(getdata,"new data")
    // if(this.partyService.getUserData('id')){
    //   console.log(getdata,"new data")

    // }
    

  }
  lastUser(id) {
    this.partyService.getLastArray(id)
    console.log(this.partyService.getLastArray(id), "last data")
  }
  nextUser(id) {
    console.log(this.partyService.getNextArray(), "next data")
  }
  prevoiusUser(id) {
    console.log(this.partyService.getPrevoiusArray(), "prevoius data")
  }

}



