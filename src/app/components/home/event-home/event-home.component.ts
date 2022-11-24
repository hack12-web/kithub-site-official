import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.scss']
})
export class EventHomeComponent implements OnInit {

  public events: any[] = [];
  public events_filter: any[] = [];

  constructor(private firestore: Firestore ) { }

  public get_all_events(){
    const DbInstance = collection(this.firestore, 'events');
    getDocs(DbInstance).then((response) =>{
      this.events = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })];
    });
  }
  ngOnInit(): void {
    this.get_all_events();
  }
}
