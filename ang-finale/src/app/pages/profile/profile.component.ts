import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

interface User{
  _id : null|string;
  full_name : string;
  email : string;
  pass : string;
  contact : string;
  city : string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user:User;

  constructor(private _userProfile : UserProfileService) {
    this._userProfile.getData().subscribe((result)=>{
      // console.log(result);
     this.user = result;
    })
   }

  ngOnInit(): void {
    
  }

}
