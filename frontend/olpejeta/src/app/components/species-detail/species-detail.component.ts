import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Bird } from 'src/app/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})

export class SpeciesDetailComponent implements OnInit {

  bird: Bird = { _id: '', common_name: '', scientific_name: ''};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getBirdDetails(this.route.snapshot.params['id']);
  }

  getBirdDetails(id: any) {
    this.dataService.getBird(id)
      .subscribe((data: any) => {
        this.bird = data;
        console.log(this.bird);
        this.isLoadingResults = false;
      });
  }


  deleteBird(id: any) {
    this.isLoadingResults = true;
    this.dataService.deleteBird(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/species']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  }



