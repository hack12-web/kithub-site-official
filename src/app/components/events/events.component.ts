import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

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

  @Output() shareEvent = new EventEmitter(); 
  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;

  events: any[] = [];
  collection: any[] = [];
  pageEvent: PageEvent | any;
  public eventFilter: any[] = [];

  currentItem = "Television";

  defaultRecords: any = 5;

  constructor(private firestore: Firestore, public dialog: MatDialog) { }

  public get_all_events(){
    const DbInstance = collection(this.firestore, 'events');
    getDocs(DbInstance).then((response) =>{
      this.events = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })]
      this.collection = this.events.slice(0, this.defaultRecords);
    });
  }
  public OpenEventDetails(){
    //alert(id);
   const dialogRef = this.dialog.open(EventDialogComponent);
   dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }
  ngOnInit(): void {
    this.get_all_events();
  }
  onPaginateChange(data:any) {
    this.collection = this.events.slice(0, data.pageSize);
  }
  public selectEvent(event : any){
    // this.shareEvent.emit(event);
    // this.OpenEventDetails();
  }
}
