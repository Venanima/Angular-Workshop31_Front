import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Info} from "../Models/info";
import {InfoService} from "../Service/info-service";

@Component({
  selector: 'app-etage0',
  standalone: true,
  imports: [],
  templateUrl: './etage0.component.html',
  styleUrl: './etage0.component.css'
})
export class Etage0Component {

  constructor(private InfoService: InfoService) {}

  AfficheInfo(name: string){
    const foundInfo = this.InfoService.findInfoWName(name);
    this.InfoService.emitChange(foundInfo);
  }

}
