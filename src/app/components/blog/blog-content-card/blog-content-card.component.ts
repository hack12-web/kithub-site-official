import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
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
@Component({
  selector: 'app-blog-content-card',
  templateUrl: './blog-content-card.component.html',
  styleUrls: ['./blog-content-card.component.scss']
})
export class BlogContentCardComponent implements OnInit {
  @Input() selectedEvents: any = [];

  public formComment: FormGroup | any;
  public comments:any = [];


  e_id: any;
  e_name: any;

  constructor(private fb: FormBuilder, private s_service: SharedService, private firestore: Firestore) { }

  public isNotEmpty(){
    return Object.keys(this.selectedEvents).length > 0;
  }
  public getAllComment(){
    const DbInstance = collection(this.firestore, 'comments');
    getDocs(DbInstance).then((response) =>{
      this.comments = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })]
    });
  }
  public send_comment(val : any){
    this.s_service.post_comment(val);
    this.formComment.reset();
    this.getAllComment();
  }
  ngOnInit(): void {
    this.getAllComment();
    this.formComment = this.fb.group({
      comment:['', Validators.required],
      name:['', Validators.required],
      email:['', Validators.required],
      event_name:[Validators.required]
    });
  }
}
