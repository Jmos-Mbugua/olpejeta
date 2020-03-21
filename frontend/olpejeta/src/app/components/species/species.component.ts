import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Bird } from 'src/app/post';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})

export class SpeciesComponent implements OnInit {
  bird:Bird[];

  displayedColumns: string[] = ['common_name', 'scientific_price'];
  data: Bird[] = [];
  isLoadingResults = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBirds()
    .subscribe(birds => {
      this.bird = birds
      this.dataService.birdsData = birds
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });//bird
  }

  details($event){
    alert("Niaje msee")
  }

  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.bird = this.dataService.filteredListOptions();
    else {
      this.bird = this.dataService.birdsData;
    }
  }
}