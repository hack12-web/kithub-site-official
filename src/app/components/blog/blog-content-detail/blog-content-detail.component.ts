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
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-content-detail',
  templateUrl: './blog-content-detail.component.html',
  styleUrls: ['./blog-content-detail.component.scss']
})
export class BlogContentDetailComponent implements OnInit {

  @Output() sendEvents = new EventEmitter();
  
  public events: any = [];
  public collection: any[] = []
  public eventsFilter: any = [];
  public _filterInput: string = "";
  public countX: number = 0;
  defaultRecords: any = 5;
  pageEvent: PageEvent | any;

  public read_more: boolean = false;
  public button_name: string = "see reaction";

  //all about comment
  public formComment: FormGroup | any;
  public comments:any = [];
  public valueAnnon:string = "anonymous";
  public commentDisable: boolean = true;

  constructor(private fb: FormBuilder, private firestore: Firestore, private _service: SharedService) { }

  public readMoreAction(){
    if(this.read_more === true){
      this.button_name = "see reaction";
      this.read_more = false;
    }else{
      this.button_name = "hide reaction";
      this.read_more = true
    }
  }
  public increaseCount(){
    for (let index = 0; index < this.events.length; index++) {
      const element = this.events[index];
      console.log(element);
    }
    //this._service.post_events
    this.countX ++;
  }
  public get filterInput(){
    return this._filterInput;
  }
  public set filterInput(value : string) {
    this._filterInput = value;
    this.eventsFilter = this.filterEventByName(value);
  }

  public getEvent(){
    const DbInstance = collection(this.firestore, 'events');
      getDocs(DbInstance).then((response) =>{
      this.events = [...response.docs.map((item) =>{
        return{...item.data(), id: item.id}
      })]
      //console.log(this.events);
      this.eventsFilter = this.events;
      this.eventsFilter = this.events.slice(0, this.defaultRecords);
      console.log(this.events);
    })
  }
  public send_comment(val : any){
    // this._service.post_comment(val);
    // this.formComment.reset();
    // this.getAllComment();
    // this.commentDisable = false;
    console.log(val);
  }
  public getAllComment(){
    const DbInstance = collection(this.firestore, 'comments');
    getDocs(DbInstance).then((response) =>{
      this.comments = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })]
    });
  }

  ngOnInit(): void {
    this.getEvent();
    this.getAllComment();
    this.formComment = this.fb.group({
      comment:['', Validators.required],
      name:['', Validators.required],
      event_id:['', Validators.required],
      event_name:['' ,Validators.required]
    });
  }
  onPaginateChange(data:any) {
    this.eventsFilter = this.events.slice(0, data.pageSize);
  }
  public filterEventByName(filterTerm: string){
    if(this.events === 0 || this.filterInput ==='')
    {
      return this.events;
    }else{
      return this.events.filter((event: any)=>{
        return event.event_name.toLowerCase() === filterTerm.toLowerCase();
      });
    }
  }

  public selectEvent(event : any){
    this.sendEvents.emit(event);
  }
}
