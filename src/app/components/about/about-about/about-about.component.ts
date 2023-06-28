import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-about',
  templateUrl: './about-about.component.html',
  styleUrls: ['./about-about.component.scss']
})
export class AboutAboutComponent implements OnInit {

  public setVisible:boolean = false;
  public textButton: string = "view more"
  constructor() { }

  public viewAction(){
    if(!this.setVisible){
      this.setVisible = true;
      this.textButton = "view less";
    }else{
      this.setVisible = false;
      this.textButton = "view more";
    }
  }
  ngOnInit(): void {
  }

}
