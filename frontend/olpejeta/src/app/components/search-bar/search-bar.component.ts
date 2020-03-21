import { Component, OnInit , ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { Bird } from '../../post';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allBirds: Bird[];
  autoCompleteList: any[]

  @ViewChild('autocompleteInput', {static: true}) autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBirds().subscribe(birds => {
      this.allBirds = birds
    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
  })
  }

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
}

  // this is where filtering the data happens according to you typed value
  filterCategoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
        return [];
    }
    if (val === '' || val === null) {
      return [];
  }
  return val ? this.allBirds.filter(s => s.common_name.toLowerCase().indexOf(val.toLowerCase()) != -1)
        : this.allBirds;
  }

  // after you clicked an autosuggest option, this function will show the field you want to show in input
  displayFn(bird: Bird) {
    let k = bird ? bird.common_name : bird;
    return k;
}

filterBirdList(event) {
  var birds = event.source.value;
  if (!birds) {
      this.dataService.searchOption = []
  }
  else {

      this.dataService.searchOption.push(birds);
      this.onSelectedOption.emit(this.dataService.searchOption)
  }
  this.focusOnPlaceInput();
}

removeOption(option) {

  let index = this.dataService.searchOption.indexOf(option);
  if (index >= 0)
      this.dataService.searchOption.splice(index, 1);
  this.focusOnPlaceInput();
  this.onSelectedOption.emit(this.dataService.searchOption)
  }

   // focus the input field and remove any unwanted text.
   focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
}

}
