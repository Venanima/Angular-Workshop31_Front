import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-carte',
  standalone: true,
    imports: [
        RouterOutlet,
        RouterLink
    ],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent {

}
