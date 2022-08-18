import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patner-home',
  templateUrl: './patner-home.component.html',
  styleUrls: ['./patner-home.component.scss']
})
export class PatnerHomeComponent implements OnInit {

  constructor() { }

  public isHidden: boolean = true;
  public tous:boolean = true;
  public burundi:boolean = false;
  public tanzanie:boolean = false;
  public france:boolean = false;
  public russie:boolean = false;
  public usa:boolean = false;

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

  ngOnInit(): void {
  }

}
