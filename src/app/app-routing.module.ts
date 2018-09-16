import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BugbustersComponent } from './bugbusters/bugbusters.component';
import { JiraComponent } from './jira/jira.component';
import { JiraAsiaComponent } from './jira-asia/jira-asia.component';

import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { RoleGuardService as RoleGuard } from './role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bugbusters',
    component: BugbustersComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: ['admin', 'user']
    }
  },
  {
    path: 'jira',
    component: JiraComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: ['admin']
    }
  },
  {
    path: 'jiraasia',
    component: JiraAsiaComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: ['admin']
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
