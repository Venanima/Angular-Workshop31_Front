import { Routes } from '@angular/router';
import {Etage0Component} from "./etage0/etage0.component";
import {Etage1Component} from "./etage1/etage1.component";
import {Etage2Component} from "./etage2/etage2.component";

export const routes: Routes = [
  {path: 'rdc', component: Etage0Component},
  {path: '', component: Etage0Component},
  {path: 'etage1', component: Etage1Component},
  {path: 'etage2', component: Etage2Component},
];
