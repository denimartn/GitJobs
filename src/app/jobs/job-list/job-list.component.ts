import { Router } from '@angular/router';
import { JobService } from './../job.service';
import { Component, OnInit } from '@angular/core';
import { IJob } from './../job';



@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  pageTitle: string="List of jobs ";
  // tslint:disable-next-line: variable-name
  _searchWord : string;
  jobs: IJob[];
  searchedJobs : IJob[];
  errorMessage: string;

  jobD :IJob;


  get searchWord(): string {
    return this._searchWord;
  }

  set searchWord(value: string) {
    this._searchWord = value;
    this.searchedJobs = this.searchWord ? this.performSearch(this.searchWord) : this.jobs;
  }


  constructor(private jobService: JobService, private router: Router) {

  }

  /*
  ngOnInit() {
    this.jobs = this.jobService.getJobs();
    this.searchedJobs = this.jobs;
  }

*/
  ngOnInit() {
    this.jobService.getJobs().subscribe({
      next: jobs => {this.jobs = jobs
                         this.searchedJobs = this.jobs},
      error: err => this.errorMessage = err
    });

  }

  performSearch( searchBy : string): IJob[] {
     searchBy = searchBy.toLowerCase();
     return this.jobs.filter( (job: IJob) =>
                  job.title.toLowerCase().indexOf(searchBy) !== -1
                  || job.company.toLowerCase().indexOf(searchBy) !== -1
                  || job.location.toLowerCase().indexOf(searchBy) !== -1 );
  }


}
