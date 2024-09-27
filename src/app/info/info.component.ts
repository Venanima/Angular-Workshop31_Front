import {Component, Input} from '@angular/core';
import {Info} from "../Models/info";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() AmInfo!: Info;

}
