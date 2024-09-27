import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {CarteComponent} from "./carte/carte.component";
import {InfoComponent} from "./info/info.component";
import {Info} from "./Models/info";
import {Etage0Component} from "./etage0/etage0.component";
import {InfoService} from "./Service/info-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, CarteComponent, InfoComponent, Etage0Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private InfoService: InfoService ) {
    InfoService.changeEmit$.subscribe(text => {
      this.uneInfo.salle=text.salle;
      this.uneInfo.description=text.description;
    });
  }

  uneInfo!: Info;

  ngOnInit() {
    this.uneInfo = new Info("","")
  }

  changerInfo(NewInfo: Info){
    this.uneInfo.salle=NewInfo.salle;
    this.uneInfo.description=NewInfo.description;
  }

  title = 'Angular-Workshop31';

}
