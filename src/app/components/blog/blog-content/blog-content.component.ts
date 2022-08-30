import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {

  public selectedEvents: any = [];

  public file: any = {} ;
  public myForm: FormGroup | any;
  public formComment: FormGroup | any;


  public img_url: any;

  constructor(private fb: FormBuilder, private s_service: SharedService, private firestore: Firestore, private storage: Storage, private http: HttpClient) {
  }
  /*
  public chooseFile(event: any){
    this.file = event.target.files[0];
  }
  public async postEvent(val : any){
    await this.s_service.post_events(val);
    const storageRef = await ref(this.storage, `event_page/${this.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on('state_changed',
    (snapshot) =>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes * 100);
      console.log('upload is ' + progress + '% done');
    },
    (error) => {
      console.log(error.message);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
        this.img_url = downloadURL;
        console.log('File availabe at', this.img_url);
      });
    });
    this.myForm.reset();
    //this.getEvent();
  }
  /*
  public async getEvent(){
    const DbInstance = await collection(this.firestore, 'events');
     await getDocs(DbInstance).then((response) =>{
      this.events$ = [...response.docs.map((item) =>{
        return{...item.data(), id: item.id}
      })]
      console.log(this.events$);
    })
  }

  public async post_comment(val: any){
    await this.s_service.post_comment(val);
    await this.formComment.reset();
  }*/
  ngOnInit(): void {
   /* this.formComment = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      comment:['', Validators.required],
      post_id:[],
      post_name:[]
    })
    this.myForm = this.fb.group({
      event_name : new FormControl(''),
      event_details: new FormControl(''),
      event_date: new FormControl(''),
      event_img_name: new FormControl('')
    });
    */
  }
}
