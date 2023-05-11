import { Component, Input, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

  @Input() selectedEvent : any = [];
  

  constructor() { }



  public isNotEmpty(){
    return Object.keys(this.selectedEvent).length > 0;
  }


  ngOnInit(): void {
  }

}
