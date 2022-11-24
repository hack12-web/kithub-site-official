import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss']
})
export class BlogDialogComponent implements OnInit {

  public myForm: FormGroup | any;

  constructor(private s_service: SharedService, private fb: FormBuilder) { }

  public send_contact_us(val: any):void{
    this.s_service.post_contact_us(val);
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email:['', Validators.required],
      message:['', Validators.required]
    })
  }

}
