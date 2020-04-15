import { IJob } from './../job';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job: IJob;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let title= this.route.snapshot.paramMap.get('title');
    let company= this.route.snapshot.paramMap.get('company');
    let description = this.route.snapshot.paramMap.get('description').toString();



    this.job = {
      "title": title,
      "company": company,
      "location": null,
      "created_at": null,
      "description": description
    };

  }

  onBack(): void {
    this.router.navigate(['./jobs']);
  }

}
