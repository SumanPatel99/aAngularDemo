import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service'

@Component({
  selector: 'app-imageshow',
  templateUrl: './imageshow.component.html',
  styleUrls: ['./imageshow.component.css']
})
export class ImageshowComponent implements OnInit {
  imgUrl: string = 'https://picsum.photos/250/';
  imageToShow: any;
  isImageLoading: boolean;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    // console.log("reader",reader)
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
      //  console.log(this.imageToShow,"iomage yo show")
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
   }
 
   getImageFromService() {
       this.isImageLoading = true;
       this.imageService.getImage(this.imgUrl).subscribe(data => {
         this.createImageFromBlob(data);
         this.isImageLoading = false;
         this.imageToShow  
         console.log(this.imageToShow,"image to show")
      //  }, error => {
      //    this.isImageLoading = false;
      //    console.log(error);
       }
       );
   }
}
