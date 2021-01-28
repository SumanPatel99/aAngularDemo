import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
id
profile
image
selectedImage
  constructor(private activatedRoute : ActivatedRoute, private userService : FormService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id)
    this.getUserdata(this.id)
    this.userImage(this.id)
  }
  getUserdata(id){
    if(this.userService.getData(id) != undefined){
      this.userService.getData(id)
      this.profile = this.userService.getData(id)
      console.log(this.profile,"profile")
    }
    this.userService.getData(id)
  }
  userImage(id){
    if(localStorage.image){
      this.image = localStorage.image
      console.log(this.image,"image store")
    }
    // this.userService.getImage()
  }

}
