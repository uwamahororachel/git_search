import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { CreationPipe } from './creation.pipe';
import { UserserviceService } from './userservice.service';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    FormComponent,
    CreationPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    UserserviceService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
