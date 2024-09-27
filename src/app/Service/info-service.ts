import {Injectable} from "@angular/core";
import {Info} from "../Models/info";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class InfoService{
  private infos: Info[] = [
    new Info("Amphi", "Un Amphi bien cool"),
    new Info("Admin", "La salle des Admin"),
    new Info(" ", "Les escaliers"),
    new Info("101", "La salle 101"),
    new Info("102", "La salle 102 qui est vide"),
    new Info("103", "La 103 qui est vraiment sympa"),
    new Info("104", "104 juste"),
    new Info("105", "105 C'est un beau chiffre"),
  ];

  getAllInfo(): Info[]{
    return [...this.infos];
  }

  findInfoWName(infoName: string):Info{
    const foundInfo = this.infos.find(Info => Info.salle===infoName);
    if(!foundInfo){
      throw new Error("info non trouvé");
    }
    return foundInfo;
  }


  private emitChangeSource = new Subject<any>();
  changeEmit$ = this.emitChangeSource.asObservable();
  emitChange(change: any){
    this.emitChangeSource.next(change);
  }

}
