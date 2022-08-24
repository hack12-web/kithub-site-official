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

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public events: any = [];

  constructor(private firestore: Firestore) { }

  public async post_events(val : any){
    const DbInstance = await collection(this.firestore, 'events');
    await addDoc(DbInstance, val).then(() =>{
      alert('Event posted');
    }).catch((error) =>{
      alert(error.message);
    });
  }
  public async post_comment(val : any){
    const DbInstance = await collection(this.firestore, 'comments');
    await addDoc(DbInstance, val).then(() =>{
      alert("Thanks for your comment");
    }).catch((error) =>{
      alert("sorry something want wrong refresh page and try again ! (:");
    });
  }
}
