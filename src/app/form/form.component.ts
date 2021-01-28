import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm:FormGroup
  public prodata: any
  public name = ''
  public email = ''
  public age = ''
  public address1 = ''
  public address2 = ''
  public mobile = ''
  public state = ''
  public checked = false
  isHome = false;
  isCompany = false;
  user:any
  image : any 
  selectedImage;
  profile : any =[]
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  constructor(private frm:FormBuilder,private form:FormService,private router:Router) {
    this.registerForm = this.frm.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20),Validators.pattern('^[a-zA-Z \-\']+')]],
      mobile: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]+')]],
      age: [20, Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20)]],
      address1: [''],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      subscribe: [false]
    })
   }

  ngOnInit() {
  }
  
  Register(value){
    console.log("user values",value.value)
    var newd = this.form.storeData(value)
    var id = localStorage.getItem('userId') 
    console.log( newd,"value")
    this.router.navigate(['profile/' + id]);
  }

  getdata(id){
    if(this.form.getData(id) != undefined){
      this.profile = this.form.getData(id)
      this.image = this.form.getImage()
      console.log(this.image,"register iamge")
      console.log("data",this.profile)
    }

  }

  selectedFile(event) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    console.log(reader , 'jhsdfsj')
    reader.readAsDataURL(file);
    reader.onload = function(){
      console.log(reader.result)
       var user:any = reader.result
       console.log(user,"jajsd")
      localStorage.setItem("image",user) 
      me.selectedImage = reader.result;
    }
    // console.log(localStorage.getItem("image"),"get image")
  }

}
