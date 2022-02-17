import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import {allIcons } from 'ng-bootstrap-icons/icons';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { DoctorService } from './doctor.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ParentUserComponent } from './parent-user/parent-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AddDoctorComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    EditDoctorComponent,
    ParentUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BootstrapIconsModule.pick(allIcons),
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule
  ],
  providers: [AuthService,DoctorService,AuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
