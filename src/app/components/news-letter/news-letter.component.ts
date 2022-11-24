import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {

  public myForm: FormGroup | any;

  constructor(private fb : FormBuilder ) {}
  public sendNewsLetters(val:any):void{
    console.log(val);
    this.myForm.reset();
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email : ['', Validators.required]
    })
  }
}
