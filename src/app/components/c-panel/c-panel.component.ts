import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-panel',
  templateUrl: './c-panel.component.html',
  styleUrls: ['./c-panel.component.scss']
})
export class CPanelComponent implements OnInit {
  public showFiller: boolean = false;

  public showEquipe: boolean = false;
  public showEvents: boolean = false;
  public showPathner: boolean = false;
  public showSubscribe: boolean = false;
  public showContact: boolean = false;
  public showBlog: boolean = false;
  public showWelcome: boolean = true;

  constructor(private router: Router) {

  }
  public  ControlX():void{
    this.router.navigate(["/cx_panel"]);
  }
  public showFxEquip():void{
    this.showEquipe = true;
    this.showEvents = false;
    this.showWelcome = false;
    this.showPathner = false;
    this.showSubscribe = false;
    this.showContact = false;
    this.showBlog = false;
  }
  public showFxEvents():void{
    this.showEquipe = false;
    this.showEvents = true;
    this.showWelcome = false;
    this.showPathner = false;
    this.showSubscribe = false;
    this.showContact = false;
    this.showBlog = false;
  }
  public showFxPathner():void{
    this.showPathner = true;
    this.showEquipe = false;
    this.showEvents = false;
    this.showWelcome = false;
    this.showSubscribe = false;
    this.showContact = false;
    this.showBlog = false;
  }
  public showFxSubscribe():void{
    this.showSubscribe = true;
    this.showPathner = false;
    this.showEquipe = false;
    this.showEvents = false;
    this.showWelcome = false;
    this.showContact = false;
    this.showBlog = false;
  }
  public showFxContact():void{
    this.showContact = true;
    this.showSubscribe = false;
    this.showPathner = false;
    this.showEquipe = false;
    this.showEvents = false;
    this.showWelcome = false;
    this.showBlog = false;
  }
  public showFxBlog():void{
    this.showBlog = true;
    this.showContact = false;
    this.showSubscribe = false;
    this.showPathner = false;
    this.showEquipe = false;
    this.showEvents = false;
    this.showWelcome = false;
  }
  ngOnInit(): void {
  }

}
