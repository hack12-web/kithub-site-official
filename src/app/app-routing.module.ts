import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DepartmentComponent } from './components/department/department.component';
import { DomainComponent } from './components/domain/domain.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
