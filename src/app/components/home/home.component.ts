import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsForm: FormGroup | any;


  constructor(private fb : FormBuilder) { }

  public submi_news_letters(value:any){
    this.newsForm.reset();
  }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      email:['', Validators.required]
    });
  }

}
