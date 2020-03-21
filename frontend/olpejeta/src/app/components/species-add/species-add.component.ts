import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-species-add',
  templateUrl: './species-add.component.html',
  styleUrls: ['./species-add.component.css']
})

export class SpeciesAddComponent implements OnInit {

  birdForm: FormGroup;
  common_name = '';
  scientific_name = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private dataService: DataService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.birdForm = this.formBuilder.group({
      'common_name' : [null, Validators.required],
      'scientific_name' : [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.dataService.addBird(this.birdForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/species-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
