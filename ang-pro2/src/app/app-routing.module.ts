import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { HelpComponent } from './page/help/help.component';
import { ApiDataComponent } from './page/api-data/api-data.component';
import { TeacherComponent } from './page/teacher/teacher.component';
import { SignupComponent } from './page/signup/signup.component';
import { AddTeacherComponent } from './page/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './page/edit-teacher/edit-teacher.component';
import { ProductComponent } from './page/product/product.component';
import { TermsComponent } from './page/terms/terms.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';

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
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "add-teacher",
    component : AddTeacherComponent
  },
  {
    path : "edit-teacher/:id",
    component : EditTeacherComponent
  },
  {
    path : "product",
    component : ProductComponent
  },
  {
    path : "terms",
    component : TermsComponent
  },
  {
    path : "file-upload",
    component : FileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
