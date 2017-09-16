import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { CompareComponent } from './components/compare/compare.component';
import { ReportComponent } from './components/report/report.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FileValidator} from './components/register/register.validator';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    RegisterComponent,
    CompareComponent,
    ReportComponent,
    FileValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule.forRoot(),
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
