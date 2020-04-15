
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'jobs', component: JobListComponent},
  { path: 'jobs/:title/:company/:description', component: JobDetailComponent},
  { path: '' , redirectTo: 'jobs', pathMatch: 'full'},
  { path: '**' , redirectTo: 'jobs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
