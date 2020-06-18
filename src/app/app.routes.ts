import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TrackingRestComponent} from "./components/tracking-rest/tracking-rest.component";



export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tracking-rest', component: TrackingRestComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];
