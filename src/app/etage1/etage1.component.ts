import { Component } from '@angular/core';
import {InfoService} from "../Service/info-service";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-etage1',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './etage1.component.html',
  styleUrl: './etage1.component.css'
})
export class Etage1Component {
  constructor(private InfoService: InfoService) {}

  AfficheInfo(name: string){
    const foundInfo = this.InfoService.findInfoWName(name);
    this.InfoService.emitChange(foundInfo);
  }

}
