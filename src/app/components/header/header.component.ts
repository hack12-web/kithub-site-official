import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public time:string = new Date().toLocaleTimeString();

  constructor( private serviceTranslate: TranslateConfigService ) {
    this.getTime();
  }

  public getDate():string{
    return new Date().toLocaleDateString();
  }
  public getTime():void{
    //return new Date().toLocaleTimeString();
    setInterval(() =>{
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
  public changeLanguage(type:string){
    this.serviceTranslate.changeLanguage(type);
  }
  ngOnInit(): void {
  }

}
//The web site design by NYONGERO LIGOGO Claude
