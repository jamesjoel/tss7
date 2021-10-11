import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HelpComponent } from './page/help/help.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApiDataComponent } from './page/api-data/api-data.component';
import { TeacherComponent } from './page/teacher/teacher.component';
import { SignupComponent } from './page/signup/signup.component';
import { AddTeacherComponent } from './page/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './page/edit-teacher/edit-teacher.component';
import { ProductComponent } from './page/product/product.component';
import { DiscountPipe } from './pipes/discount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    ApiDataComponent,
    TeacherComponent,
    SignupComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    ProductComponent,
    DiscountPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
