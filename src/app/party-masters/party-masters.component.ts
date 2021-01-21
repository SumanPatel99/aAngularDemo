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

  id: 0
 public name = ''
  address = ''
  email = ''
  telephonenumber = ''
  food = ''
  gstNo = ''
  mobile = ''
  state = ''
  druglicence = ''
  proprietalName = ''
  user: any
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
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20)]],
      state: ['', Validators.required],
    })
  }
  Register(value) {
    console.log("data enter", value.value)
    var service = this.partyService.storeData(value)
    console.log("ggg", service)
    this.registerForm.reset()

  }
  firstUser(id): any {


    if (this.partyService.getData(id) != undefined) {
      this.JSONDatas = this.partyService.getData(id)
      console.log(this.JSONDatas, "json")
      const parent = {
        name: this.JSONDatas[0].name,
        address: this.JSONDatas[0].address,
        telephonenumber: this.JSONDatas[0].telephone,
        proprietalName: this.JSONDatas[0].proprietal,
        druglicence: this.JSONDatas[0].drug_no,
        food: this.JSONDatas[0].food,
        gstNo: this.JSONDatas[0].gstNo,
        mobile: this.JSONDatas[0].mobile,
        email: this.JSONDatas[0].email,
        state: this.JSONDatas[0].state,
      }
      console.log(parent, "adsa")
      this.registerForm.patchValue(parent)

    }
    this.partyService.getData(id)
    this.JSONDatas = this.partyService.getData(id)
    console.log(this.partyService.getData(id), "first data")
    // this.registerForm.value
    // console.log(this.registerForm.value, "jhhj")

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
 id =1 
    this.partyService.getLastArray(id)
    if (this.partyService.getLastArray(id) != null) {

      this.JSONDatas = this.partyService.getLastArray(id)
      console.log(this.JSONDatas, "json")
      const parent = {
        name: this.JSONDatas.name,
        address: this.JSONDatas[0].address
      }
      console.log(parent, "adsa")
      
    }
    console.log(this.partyService.getLastArray(id), "last data")

  }
  nextUser(id) {
    if (this.partyService.getNextArray != undefined) {

      this.JSONDatas = this.partyService.getNextArray()
      console.log(this.JSONDatas, "json")
      const parent = {
        name: this.JSONDatas[0].name,
        address: this.JSONDatas[0].address,
        telephonenumber: this.JSONDatas[0].telephone,
        proprietalName: this.JSONDatas[0].proprietal,
        druglicence: this.JSONDatas[0].drug_no,
        food: this.JSONDatas[0].food,
        gstNo: this.JSONDatas[0].gstNo,
        mobile: this.JSONDatas[0].mobile,
        email: this.JSONDatas[0].email,
        state: this.JSONDatas[0].state,
      }
      console.log(parent, "adsa")
      this.registerForm.patchValue(parent)
    }
    console.log(this.partyService.getNextArray(), "next data")

  }
  prevoiusUser(id) {
    if (this.partyService.getPrevoiusArray() != undefined) {

      this.JSONDatas = this.partyService.getPrevoiusArray()
      console.log(this.JSONDatas, "json")
      const parent = {
        name: this.JSONDatas[0].name,
        address: this.JSONDatas[0].address,
        telephonenumber: this.JSONDatas[0].telephone,
        proprietalName: this.JSONDatas[0].proprietal,
        druglicence: this.JSONDatas[0].drug_no,
        food: this.JSONDatas[0].food,
        gstNo: this.JSONDatas[0].gstNo,
        mobile: this.JSONDatas[0].mobile,
        email: this.JSONDatas[0].email,
        state: this.JSONDatas[0].state,
      }
      // console.log(parent, "adsa")
      this.registerForm.patchValue(parent)
    }
    // console.log(this.partyService.getPrevoiusArray(), "prevoius data")
  }

}



