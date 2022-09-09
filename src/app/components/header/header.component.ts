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

  constructor( private serviceTranslate: TranslateConfigService, private dialog: MatDialog ) {
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
