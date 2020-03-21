// import { species } from 'src/app/user.model';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { SpeciesComponent } from './components/species/species.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuidesComponent} from './components/guides/guides.component';
import { LoginComponent } from './components/login/login.component'
import { UsersComponent} from './components/users/users.component';
import { SightingsComponent } from './components/sightings/sightings.component';
import { SearchBarComponent} from './components/search-bar/search-bar.component';
import { SpeciesDetailComponent } from './components/species-detail/species-detail.component';
import { SpeciesAddComponent } from './components/species-add/species-add.component';
import { SpeciesEditComponent } from './components/species-edit/species-edit.component';
  

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'guides', component: GuidesComponent},
    { path: 'users', component: UsersComponent},
    { path: 'species',component: SpeciesComponent},
    { path: 'summary', component: SummaryComponent},
    { path: 'sightings', component: SightingsComponent},
    { path: 'searchbar', component: SearchBarComponent},
    { path: 'speciesdetail', component: SpeciesDetailComponent},
    { path: 'speciesadd', component: SpeciesAddComponent},
    { path: 'speciesedit', component: SpeciesEditComponent},  ]
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }