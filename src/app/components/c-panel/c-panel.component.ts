import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-panel',
  templateUrl: './c-panel.component.html',
  styleUrls: ['./c-panel.component.scss']
})
export class CPanelComponent implements OnInit {
  public showFiller: boolean = false;
  public showEquipe: boolean = false;

  constructor() { }

  public showFxEquip():void{
    this.showEquipe = true;
  }

  ngOnInit(): void {
  }

}
