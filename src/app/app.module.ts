import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CountDown } from "ng2-date-countdown";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BugbustersComponent } from './bugbusters/bugbusters.component';
import { MaterialModule } from './material.module';

import { GetTokenService } from './get-token.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RoleGuardService } from './role-guard.service';
import { PostsService } from './posts.service';
import { ProductService } from './product.service';
import { PriorityService } from './priority.service';
import { ProcessAsiaService } from './process-asia.service';
import { TotalService } from './total.service';
import { FilterService } from './filter.service';
import { JiraComponent } from './jira/jira.component';
import { JiraAsiaComponent } from './jira-asia/jira-asia.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    BugbustersComponent,
    JiraComponent,
    JiraAsiaComponent,
    // CountDown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    GetTokenService,
    AuthGuardService,
    AuthService,
    RoleGuardService,
    PostsService,
    ProductService,
    PriorityService,
    TotalService,
    FilterService,
    ProcessAsiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
