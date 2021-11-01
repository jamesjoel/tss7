import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
 
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private _upload : UploadService) { }

  images:any[]=[];
  ngOnInit(): void {
  }

  upload(a:any){
    // console.log(a.files[0]);
    let file = a.files[0];
    let form = new FormData();    
    form.append("image", file);
    // { image : file }
    console.log(a.loaded);
    this._upload.do_upload(form).subscribe((event : HttpEvent<any>)=>{
      // console.log(result);
      // this.images.push(result.filepath);
      console.log(event);
    })

  }
}
/*
JavaScript

localStorage
FormData(), append


*/
