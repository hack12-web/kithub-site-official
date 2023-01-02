import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patner-home',
  templateUrl: './patner-home.component.html',
  styleUrls: ['./patner-home.component.scss']
})
export class PatnerHomeComponent implements OnInit {

  pathner1: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F001.jpeg?alt=media&token=0dddaca8-994e-4c98-ae24-f00802f9de54";
  pathner2: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F002.jpg?alt=media&token=096aaff2-0748-4754-9b31-01a86218f433";
  pathner3: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F011.jpg?alt=media&token=2ed714e0-fe78-469f-b14f-f002f716aa59";
  pathner4: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F004.jpeg?alt=media&token=a5e9cf16-ccf0-47f9-aea7-64956ebd4f28";
  pathner5: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F005.jpg?alt=media&token=e77a7c3e-f282-4d69-bb6c-61d8dd8bd0ee";
  pathner6: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F006.png?alt=media&token=f40dc8b9-12fc-436d-b039-7b4c6264a22c";
  pathner7: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F007.jpeg?alt=media&token=4c2dde71-a355-4483-a0d3-0848d1b03c44";
  pathner8: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F008.jpg?alt=media&token=b3b0a3f2-e389-4a39-9886-3e52bdec2964";
  pathner9: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F009.png?alt=media&token=83a8f35f-dedd-460c-ac7b-efe23d2fecf6";
  pathner10: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F010.jpeg?alt=media&token=eb61b7cd-2255-42b0-8f4f-da1b476c17e7";
  pathner11: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F014.jpg?alt=media&token=171edcfb-f41e-4015-8413-a33fd73af7e8";
  pathner12: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F012.png?alt=media&token=7f9fe705-769f-4803-9ba0-fe87d555d3b6";
  pathner13: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F013.jpeg?alt=media&token=1cdcc021-526f-4662-b8c5-95aa37b1e967";
  pathner14: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F014.jpg?alt=media&token=171edcfb-f41e-4015-8413-a33fd73af7e8";
  pathner15: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F015.png?alt=media&token=d0a71a46-e955-41f5-bae6-0c1450c01290";
  pathner16: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F016.jpg?alt=media&token=f8ca49cd-a2ca-4576-8770-971bb3de8dca";
  pathner17: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F017.png?alt=media&token=1722ae99-18b1-4103-af57-dbe8250ae055";
  pathner18: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F018.jpg?alt=media&token=3c2b3eca-29e9-4af7-9d7e-26643f6477b3";
  pathner19: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F019.png?alt=media&token=17c4b1b4-a4f4-4f7a-9af1-c7420901d5c7";
  pathner20: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F020.jpg?alt=media&token=0dbe0d59-ebd7-4e21-b227-01b6dd9835d8";
  pathner21: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/pathner%2F021.jpg?alt=media&token=9d06afe3-cb62-4d52-8c32-a623fc684a10";

  constructor() { }

  public isHidden: boolean = true;
  public tous:boolean = true;
  public burundi:boolean = false;
  public benin:boolean = false;
  public france:boolean = false;

  public show_all():void{
    this.tous = true;
    this.burundi = false;
    this.benin = false;
    this.france = false;
  }
  public show_burundi():void{
    this.tous = false;
    this.burundi = true;
    this.benin = false;
    this.france = false;
  }
  public show_benin():void{
    this.tous = false;
    this.burundi = false;
    this.benin = true;
    this.france = false;
  }
  public show_france():void{
    this.tous = false;
    this.burundi = false;
    this.benin = false;
    this.france = true;
  }

  ngOnInit(): void {
  }

}
