import { Component, OnInit } from '@angular/core';
import { collection, getDocs, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-equipe-detail',
  templateUrl: './equipe-detail.component.html',
  styleUrls: ['./equipe-detail.component.scss']
})
export class EquipeDetailComponent implements OnInit {

  public equipes: any = [];

  constructor(private firestore: Firestore) { }

  public getEquipe(){
    const DbInstance = collection(this.firestore, 'equipe');
    getDocs(DbInstance).then((response) =>{
      this.equipes = [...response.docs.map((item) =>{
        return{...item.data(), id: item.id }
      })]
      console.log(this.equipes);
    })
  }

  ngOnInit(): void {
  }

}
