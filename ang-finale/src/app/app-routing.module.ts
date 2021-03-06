import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BackdoorGuard } from './guards/backdoor.guard';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [BackdoorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
