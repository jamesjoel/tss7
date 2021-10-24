import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { User } from '../../models/user.model';


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
