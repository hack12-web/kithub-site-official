import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminLoginComponent } from './components/c-panel/admin-login/admin-login.component';
import { AuthenticationGuard } from './components/c-panel/auth/authentication.guard';
import { CPanelComponent } from './components/c-panel/c-panel.component';
import { DepartmentComponent } from './components/department/department.component';
import { DomainComponent } from './components/domain/domain.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';

import { ProgrammsComponent } from './components/programms/programms.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'domain',
    component: DomainComponent
  },
  {
    path:'programms',
    component: ProgrammsComponent
  },
  {
    path:'department',
    component: DepartmentComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'events',
    component: EventsComponent,
    // children:[ { path:':id', component: EventDetailsComponent } ]
  },
  {
    path:'events/:id',
    component: EventDetailsComponent
  },
  {
    path:"cx_panel",
    canActivate: [AuthenticationGuard],
    component: CPanelComponent
  },
  {
    path:"Auth/admin/control-pannel",
    component: CPanelComponent
  },
  {
    path:"Auth/adminLogin",
    component: AdminLoginComponent
  },
  {
    path:"**",
    component: NotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
