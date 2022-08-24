import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { DepartmentComponent } from './components/department/department.component';
import { DomainComponent } from './components/domain/domain.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { ProgrammsComponent } from './components/programms/programms.component';

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
    children:[ { path:':id', component: EventDetailsComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
