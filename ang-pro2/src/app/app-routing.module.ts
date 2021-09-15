import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { HelpComponent } from './page/help/help.component';
import { ApiDataComponent } from './page/api-data/api-data.component';
import { TeacherComponent } from './page/teacher/teacher.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "apidata",
    component : ApiDataComponent
  },
  {
    path : "teacher",
    component : TeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
