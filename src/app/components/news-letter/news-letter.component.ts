import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {

  public newsLetterForm: FormGroup | any;

  constructor(private formBuilder : FormBuilder ) { }

  public sendNewsLetters(val:any):void{

  }
  ngOnInit(): void {
    this.newsLetterForm = this.formBuilder.group({
      email : ['']
    });
  }

}
