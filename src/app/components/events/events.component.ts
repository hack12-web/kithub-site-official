import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

import {
  Firestore,
  collection,
  getDocs,
  doc,
 } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from './event-dialog/event-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$!: Observable<any[]> | any;

  constructor(private firestore: Firestore, public dialog: MatDialog) { }

  public async get_all_events(){
    const DbInstance = await collection(this.firestore, 'events');
    getDocs(DbInstance).then((response) =>{
      this.events$ = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })]
    })
  }
  openEventDetails(id : any){
    //alert(id);
   const dialogRef = this.dialog.open(EventDialogComponent);
   dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  ngOnInit(): void {
    this.get_all_events();
  }

}
