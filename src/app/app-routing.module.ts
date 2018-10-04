import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaSenderComponent } from './meta/meta-sender/meta-sender.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/create', component: ProjectCreateComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
