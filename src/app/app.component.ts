import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kithub-site-official';

  onActivate(event: any){
    window.scroll({
      top:0,
      left:0,
      behavior:'smooth'
    });
  }
  ngOnInit(): void {
    Aos.init();
  }
}
