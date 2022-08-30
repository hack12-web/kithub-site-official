import { Injectable } from '@angular/core';
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
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogContentCardComponent } from '../components/blog/blog-content-card/blog-content-card.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public events: any = [];

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(private firestore: Firestore, private _snackBar: MatSnackBar) { }

  public show(): void{
    this._loading.next(true);
  }
  public hide(): void{
    this._loading.next(false);
  }

  public post_events(val : any){
    const DbInstance = collection(this.firestore, 'events');
    addDoc(DbInstance, val).then(() =>{
      alert('Event posted');
    }).catch((error) =>{
      alert(error.message);
    });
  }
  public openSnackBar(message: string, action: string){
   this._snackBar.open(message, action);
  }
  public post_comment(val : any){
    const DbInstance = collection(this.firestore, 'comments');
    addDoc(DbInstance, val).then(() =>{
      this.openSnackBar('Thanks for your comment','close');
    }).catch((error) =>{
      this.openSnackBar('sorry something want wrong refresh page and try again ! (:','close');
    });
  }
}
