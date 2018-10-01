import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaSenderComponent } from './meta/meta-sender/meta-sender.component';

const routes: Routes = [
  { path: '', component: MetaSenderComponent },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
