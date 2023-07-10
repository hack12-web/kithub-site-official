import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { BlogDialogComponent } from '../blog/blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public time:string = new Date().toLocaleTimeString();
  public langName:string = 'fr';
  public nameOne:string = 'english';
  public nameTwo:string = 'francais';
  public nameThree:string = 'suédois';
  public nameFour:string = 'kiswahili';
  
  constructor( private serviceTranslate: TranslateConfigService, private dialog: MatDialog ) {
    this.getTime();

    window.addEventListener("scroll", function(){
      var nav = document.querySelector("nav");
      nav?.classList.toggle("sticky", window.scrollY > 0);
    });
  }
  public scrollTop(){
    window.scrollTo({top:0, behavior:'smooth'});
  }
  public scrollBottom(){
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
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
    this.langName = type;
  }
  public openDialog(){
    //this.dialog.open(BlogDialogComponent);
    const dialogRef = this.dialog.open(BlogDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    
  }

}
//The web site design by NYONGERO LIGOGO Claude
