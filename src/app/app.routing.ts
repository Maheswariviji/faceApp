import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { CompareComponent } from './components/compare/compare.component';
import { ReportComponent } from './components/report/report.component';
const APP_ROUTES: Routes = [
  // { path: '', component: AppComponent },
   { path: 'register', component: RegisterComponent },
    { path: 'compare', component: CompareComponent },
     { path: 'report', component: ReportComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);