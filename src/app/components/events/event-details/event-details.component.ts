import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  id: any;
  id$ !: Observable<Number>;
  events: any[] = [];
  comments: any[] = [];
  collection: any[] = [];
  formComment: FormGroup | any;
  commentDisable: boolean = true;
  valueAnnon:string = "Anonymous";
  
  constructor(private router: ActivatedRoute, private firestore: Firestore, private fb: FormBuilder, private _service: SharedService) { }

  public get_all_events(){
    const DbInstance = collection(this.firestore, 'events');
    getDocs(DbInstance).then((response) =>{
      this.events = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })]
    });
  }
  public getAllComment(){
    const DbInstance = collection(this.firestore, 'comments');
    getDocs(DbInstance).then((response) =>{
      this.comments = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })]
      console.log(this.comments);
    });
  }
  public send_comment(val: any){
    this._service.post_comment(val);
    this.formComment.reset();
    this.getAllComment();
    this.commentDisable = false;
  }
  ngOnInit(): void {
    this.get_all_events();
    this.getAllComment();
    // this.id$ = this.router.params.pipe(
    //   map(params => params['id'])
    // )
    this.router.params.subscribe((params) =>{
      this.id = params['id'];
    });
    this.formComment = this.fb.group({
      comment:['', Validators.required],
      name:['', Validators.required],
      event_id:['', Validators.required],
      event_name:['' ,Validators.required]
    });
  }
}
