import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-panel',
  templateUrl: './c-panel.component.html',
  styleUrls: ['./c-panel.component.scss']
})
export class CPanelComponent implements OnInit {
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
