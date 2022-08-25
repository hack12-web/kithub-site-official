import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-content-card',
  templateUrl: './blog-content-card.component.html',
  styleUrls: ['./blog-content-card.component.scss']
})
export class BlogContentCardComponent implements OnInit {

  @Input() selectedEvents: Observable<any[]> | any;

  public isRead: boolean = false;

  public formComment: FormGroup | any;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formComment = this.fb.group({
      comment: ['', Validators.required],
      name:['', Validators.required],
      email:['', Validators.required],
    });
  }

  public isNotEmpty(){
    //return Object.keys(this.selectedEvents).length > 0;

  }
  public post_comment(val : any){
    console.log(val);
    this.formComment.reset();
  }

}
