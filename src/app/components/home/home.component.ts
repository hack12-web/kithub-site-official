import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public img_one_url:string = 'https://firebasestorage.googleapis.com/v0/b/fire-frontend-e1265.appspot.com/o/passport.jpg?alt=media&token=b5589334-971b-4f25-baa3-709deb44ac29';
  public event_img_one:string = 'https://firebasestorage.googleapis.com/v0/b/fire-frontend-e1265.appspot.com/o/home_page%2Fcard_1.jpg?alt=media&token=7ea1afa8-b9c6-4e68-a23d-da77f4991141';
  public event_img_two:string = 'https://firebasestorage.googleapis.com/v0/b/fire-frontend-e1265.appspot.com/o/home_page%2Fcard_2.jpg?alt=media&token=44055c1b-8cf7-4dd8-bce5-5b6efbd4210f';

  newsForm: FormGroup | any;

  public isHidden: boolean = true;
  public tous:boolean = true;
  public burundi:boolean = false;
  public tanzanie:boolean = false;
  public france:boolean = false;
  public russie:boolean = false;
  public usa:boolean = false;

  constructor(private fb : FormBuilder) { }

  public show_all():void{
    this.tous = true;
    this.burundi = false;
    this.tanzanie = false;
    this.france = false;
    this.russie = false;
    this.usa = false;
  }
  public show_burundi():void{
    this.tous = false;
    this.burundi = true;
    this.tanzanie = false;
    this.france = false;
    this.russie = false;
    this.usa = false;
  }
  public show_tanzanie():void{
    this.tous = false;
    this.burundi = false;
    this.tanzanie = true;
    this.france = false;
    this.russie = false;
    this.usa = false;
  }
  public show_france():void{
    this.tous = false;
    this.burundi = false;
    this.tanzanie = false;
    this.france = true;
    this.russie = false;
    this.usa = false;
  }
  public show_russie():void{
    this.tous = false;
    this.burundi = false;
    this.tanzanie = false;
    this.france = false;
    this.russie = true;
    this.usa = false;
  }
  public show_usa():void{
    this.tous = false;
    this.burundi = false;
    this.tanzanie = false;
    this.france = false;
    this.russie = false;
    this.usa = true;
  }
  public submi_news_letters(value:any){
    this.newsForm.reset();
  }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      email:['', Validators.required]
    });
  }

}
