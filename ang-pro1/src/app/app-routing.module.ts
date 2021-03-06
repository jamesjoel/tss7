import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// class
import { AboutComponent  } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    // localhost:4200/about
    path : "about",
    component : AboutComponent
  },
  {
    // localhost:4200/contact
    path : "contact",
    component : ContactComponent
  },
  {
    // localhost:4200/
    path : "",
    component : HomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
