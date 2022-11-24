import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public myForm: FormGroup | any;
  public show_msg_error: boolean = false;
  public usernameError: boolean = false;
  public passwordError: boolean = false;
  public counter: number = 3;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    });
  }
  public submitLogin(val : any){
    if(val.username === "root" && val.password === "root"){
      this.router.navigate(["/Auth/admin/control-pannel"]);
      this.myForm.reset();
    }else if(val.username === "root" && val.password != val.username){
      this.passwordError = true;
      this.show_msg_error = false;
      this.usernameError = false;
      this.counter--;
      if(this.counter <= 0){
        this.router.navigate(["/"]);
      }
      this.myForm.reset();
    }else if(val.password === "root" && val.username != val.password){
      this.usernameError = true;
      this.show_msg_error = false;
      this.passwordError = false;
      this.counter--;
      if(this.counter <= 0){
        this.router.navigate(["/"]);
      }
      this.myForm.reset();
    }else{
      this.counter--;
      if(this.counter <= 0){
        this.myForm.reset();
        this.router.navigate(["/"]);
        alert("you don't have access !");
      }
      this.show_msg_error = true;
      this.usernameError = false;
      this.passwordError = false;
      this.myForm.reset();
    }
  }
  ngOnInit(): void { }
}

