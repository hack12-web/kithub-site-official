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
import { BehaviorSubject, delay, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public events: any = [];

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  public uname: any;
  public pwd: any;
  public returnBool: boolean = false;

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
  public post_equipe(val : any){
    const DbInstance = collection(this.firestore, 'equipe');
    addDoc(DbInstance, val).then(() =>{
      alert("Adding successfully");
    }).catch((error) =>{
      alert("Adding fail :");
      console.log(error.message);
    });
  }
  public put_equipe(val : any){ }
  public post_contact_us(val: any):void{
    const DbInstance = collection(this.firestore, 'contactUs');
    addDoc(DbInstance, val).then(() =>{
      this.openSnackBar("Thanks","close");
    }).catch(() =>{
      this.openSnackBar('sorry something want wrong refresh page and try again ! (:','close');
    });
  }
  public openSnackBar(message: string, action: string){
   this._snackBar.open(message, action);
  }
  public post_comment(val : any){
    const DbInstance = collection(this.firestore, 'comments');
    addDoc(DbInstance, val).then(() =>{
      this.openSnackBar('Thanks for your comment','close');
    }).catch(() =>{
      this.openSnackBar('sorry something want wrong refresh page and try again ! (:','close');
    });
  }
  public isLoggedIn(){
    return of(false).pipe(delay(500));
  }
}
