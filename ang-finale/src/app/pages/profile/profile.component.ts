import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _userProfile : UserProfileService) {
    this._userProfile.getData().subscribe((result)=>{
      console.log(result);
    })
   }

  ngOnInit(): void {
  }

}
