import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.scss']
})
export class EventHomeComponent implements OnInit {

  public event_img_one:string = 'https://firebasestorage.googleapis.com/v0/b/fire-frontend-e1265.appspot.com/o/home_page%2Fcard_1.jpg?alt=media&token=7ea1afa8-b9c6-4e68-a23d-da77f4991141';
  public event_img_two:string = 'https://firebasestorage.googleapis.com/v0/b/fire-frontend-e1265.appspot.com/o/home_page%2Fcard_2.jpg?alt=media&token=44055c1b-8cf7-4dd8-bce5-5b6efbd4210f';

  constructor() { }

  ngOnInit(): void {
  }

}
