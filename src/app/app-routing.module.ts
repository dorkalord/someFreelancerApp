import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaSenderComponent } from './meta/meta-sender/meta-sender.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  
  { path: 'projects/create', component: ProjectCreateComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
