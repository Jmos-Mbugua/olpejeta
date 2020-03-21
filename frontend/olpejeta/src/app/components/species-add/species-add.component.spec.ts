import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesAddComponent } from './species-add.component';

describe('SpeciesAddComponent', () => {
  let component: SpeciesAddComponent;
  let fixture: ComponentFixture<SpeciesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
