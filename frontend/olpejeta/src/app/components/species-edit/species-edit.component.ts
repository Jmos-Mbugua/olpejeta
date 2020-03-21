import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataService } from 'src/app/data.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-species-edit',
  templateUrl: './species-edit.component.html',
  styleUrls: ['./species-edit.component.css']
})
export class SpeciesEditComponent implements OnInit {

  birdForm: FormGroup;
  _id = '';
  common_name = '';
  scientific_desc = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBird(this.route.snapshot.params['id']);
    this.birdForm = this.formBuilder.group({
      'common_name' : [null, Validators.required],
      'scientific_name' : [null, Validators.required]
    });
  }


  getBird(id: any) {
    this.dataService.getBird(id).subscribe((data: any) => {
      this._id = data._id;
      this.birdForm.setValue({
        common_name: data.common_name,
        scientific_name: data.scientific_name
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.dataService.updateBird(this._id, this.birdForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/species-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  birdDetails() {
    this.router.navigate(['/species-details', this._id]);
  }

}
