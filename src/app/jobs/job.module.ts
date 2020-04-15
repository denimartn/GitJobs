import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared.module';


import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    JobListComponent,
    JobDetailComponent,
  ],
  imports: [
   SharedModule,
   AppRoutingModule
  ]
})
export class JobModule { }
