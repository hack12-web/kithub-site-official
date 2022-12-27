import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-news-home',
  templateUrl: './last-news-home.component.html',
  styleUrls: ['./last-news-home.component.scss']
})
export class LastNewsHomeComponent implements OnInit {
  //left coner img
  public img1: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0502.jpg?alt=media&token=0cd7f9b7-ced2-49b1-a8be-4079ae5d8faf";
  public img2: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0503.jpg?alt=media&token=2035df05-07d8-4ce0-b459-89d0aa52e521";
  public img3: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0517.jpg?alt=media&token=758aa4f5-2806-4a6e-9f90-bd6f476f7520";
  public img4: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0524.jpg?alt=media&token=809fe0f3-4cb0-4141-866b-ea7bbe4f107f";
  public img5: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0538.jpg?alt=media&token=6f1ad61d-a807-4b26-9faf-f73d46d794e3";
  public img6: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0540.jpg?alt=media&token=9d77c333-c32c-4dce-b762-27e79ef20812";
  public img7: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0541.jpg?alt=media&token=8ca01c51-e664-4dcd-9d4c-af0a9335babf";
  public img8: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0614.jpg?alt=media&token=70956c68-a473-41d4-8120-dd7aa5eb8bf1";
  public img9: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_0715.jpg?alt=media&token=f894e59d-a383-4c06-b6f3-cac1148012ef";
  public img10: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_1455.jpg?alt=media&token=80f4b277-8a0c-457b-82cd-1acbaf783b72";
  public img11: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_1456.jpg?alt=media&token=786b7e60-809d-482f-8e39-09bc4012d031";
  public img12: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_1460.jpg?alt=media&token=33f002a8-95d3-4ae5-99bb-8314fec85af0";
  public img13: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_1470.jpg?alt=media&token=c588128b-eecc-44bd-b760-552ae263dcee";
  public img14: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2FIMG_1509.jpg?alt=media&token=65fe8d8c-dfd6-4303-bcf1-b0c64a3eb3a5";
  //left coner end
  //right coner
  public imgr1: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0583.jpg?alt=media&token=7ff0fb22-4fe6-403b-8b6e-3c0a7e32a7a1";
  public imgr2: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0585.jpg?alt=media&token=4a8ad3f3-a236-40b6-8460-18526c86dc16";
  public imgr3: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0597.jpg?alt=media&token=2e579a72-db54-4ddb-9806-00103732e0c0";
  public imgr4: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0629.jpg?alt=media&token=e9c14c1c-a884-4dad-a4ce-016414933b27";
  public imgr5: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0633.jpg?alt=media&token=4fd17fc6-724d-4c8d-9f0d-c65ccc8414b1";
  public imgr6: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0647.jpg?alt=media&token=df0ae1bb-0a14-4ab1-9806-26e36c9899a6";
  public imgr7: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0650.jpg?alt=media&token=daaab551-b255-4848-a465-76c751e06992";
  public imgr8: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0682.jpg?alt=media&token=b5f1824d-ba05-439e-bd6e-b9576413c3c1";
  public imgr9: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0684.jpg?alt=media&token=542ac8d9-7525-45d5-b078-df8d718064ca";
  public imgr10: string = "https://firebasestorage.googleapis.com/v0/b/kithub-fire.appspot.com/o/kit_mix_picture%2Fright_side%2FIMG_0720.jpg?alt=media&token=c6ea4516-3c59-4ffb-bc0a-89c5a24880c0";

  constructor() { }

  ngOnInit(): void {
  }

}
