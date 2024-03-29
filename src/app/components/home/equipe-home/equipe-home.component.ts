import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs, } from '@angular/fire/firestore';
@Component({
  selector: 'app-equipe-home',
  templateUrl: './equipe-home.component.html',
  styleUrls: ['./equipe-home.component.scss']
})
export class EquipeHomeComponent implements OnInit {

  public equipes: any = [];

  constructor(private firestore: Firestore) { }

  public getEquipe(){
    const DbInstance = collection(this.firestore, 'equipe');
    getDocs(DbInstance).then((response) =>{
      this.equipes = [...response.docs.map((item) =>{
        return{...item.data(), id: item.id }
      })]
    })
  }
  ngOnInit(): void {
    this.getEquipe();
  }
}
