import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedService } from 'src/app/services/shared.service';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  snapToData
 } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-blog-content-detail',
  templateUrl: './blog-content-detail.component.html',
  styleUrls: ['./blog-content-detail.component.scss']
})
export class BlogContentDetailComponent implements OnInit {

  @Output() sendEvents = new EventEmitter();
  public events$: Observable<any[]> | any;
  constructor(private firestore: Firestore, private dialog: MatDialog) { }

  public async getEvent(){
    const DbInstance = await collection(this.firestore, 'events');
     await getDocs(DbInstance).then((response) =>{
      this.events$ = [...response.docs.map((item) =>{
        return{...item.data(), id: item.id}
      })]
      console.log(this.events$);
    })
  }

  ngOnInit(): void {
    this.getEvent();
  }

  public openDialog(){
    const dialogRef = this.dialog.open(BlogDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public selectEvent(event : any){
    this.sendEvents.emit(event);
  }

}
