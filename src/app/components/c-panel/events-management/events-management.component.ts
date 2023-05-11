import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/services/shared.service';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

import {
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
 } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-management',
  template:`
  <div class="container-fluid">
    <mat-tab-group>
      <mat-tab label="POST EVENTS">
        <form [formGroup]="myForm" (submit)="postEvents(myForm.value)">
          <br />
          <mat-form-field appearance="fill">
              <mat-label>Event name</mat-label>
              <input type="text" matInput placeholder="eg: Tech Kuribose" autocomplete="off" formControlName="event_name"  />
              <mat-icon matSuffix>mode_edit</mat-icon>
          </mat-form-field>
          &nbsp;
          <mat-form-field appearance="fill">
            <mat-label>Choose a date</mat-label>
            <input matInput [matDatepicker]="picker" formControlName="event_date">
            <mat-hint>MM/DD/YYYY</mat-hint>
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>
          <br />
          <div>
              <input aria-label="picture" type="file" name="picture"  id="picture" (change)="chooseFile($event)" />
              <div class="my_img mt-3" #id>
                <img src="" class="img-fluid" alt="" srcset="">
              </div>
          </div>
          <br>
          <mat-form-field appearance="fill">
            <mat-label>Events details</mat-label>
            <textarea matInput placeholder="Typings " formControlName="event_details" ></textarea>
            <mat-icon matSuffix>mode_edit</mat-icon>
          </mat-form-field>
          <br>
          <p class="text-center">
              <button type="submit" mat-flat-button class="btn-color bnt_design" [disabled]="myForm.invalid" >POST EVENT</button>
          </p>
        </form>
      </mat-tab>
      <mat-tab label="UPDATE AND DELETE EVENTS">
        <form [formGroup]="myForm">
          <br />
          <mat-form-field appearance="fill">
              <mat-label>Event name</mat-label>
              <input type="text" matInput placeholder="eg: Tech Kuribose" autocomplete="off" formControlName="event_name"  />
              <mat-icon matSuffix>mode_edit</mat-icon>
          </mat-form-field>
          &nbsp;
          <mat-form-field appearance="fill">
            <mat-label>Choose a date</mat-label>
            <input matInput [matDatepicker]="_picker" formControlName="event_date">
            <mat-hint>MM/DD/YYYY</mat-hint>
            <mat-datepicker-toggle matSuffix [for]="_picker"></mat-datepicker-toggle>
            <mat-datepicker #_picker></mat-datepicker>
          </mat-form-field>
          <br />
          <div class="mt-3" >
              <input aria-label="picture" type="file" name="picture"  id="picture" (change)="chooseFile($event)" />
          </div>
          <br>
          <mat-form-field appearance="fill">
            <mat-label>Events details</mat-label>
            <textarea matInput placeholder="Typings " formControlName="event_details" ></textarea>
            <mat-icon matSuffix>mode_edit</mat-icon>
          </mat-form-field>
          <br>
        </form>
        <p class="mt-3">
          <mat-form-field appearance="outline">
            <mat-label>Find By Event name</mat-label>
            <input matInput placeholder="Eg: Tech kuribose..." [(ngModel)]="filterInput">
            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
            <mat-hint>Hint</mat-hint>
          </mat-form-field>
        </p>
        <div id="table">
          <table class="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">#Id</th>
                <th scope="col">Event name</th>
                <th scope="col">Event img url</th>
                <th scope="col">Date</th>
                <th scope="col">Event details</th>
                <th scope="col">Update</th>
                <th scope="col" >Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of eventFilter">
                <th scope="row"> {{item.id.substr(item.id.length -5) }} </th>
                <td>{{item.event_name}}</td>
                <td>{{item.imag_link}}</td>
                <td>{{item.event_date.toMillis() | date:'MM/dd/yyyy' }}</td>
                <td class="event_design">{{ item.event_details }}</td>
                  <td>
                    <button mat-raised-button (click)="updateEvent(item.id)" [disabled]="myForm.invalid">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button mat-raised-button (click)="deleteEvent(item.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </mat-tab>
      <br><br>
      <mat-tab label="VIEW EVENTS">
      <div id="table">
        <p class="mt-3">
          <mat-form-field appearance="outline">
            <mat-label>Find By Event name</mat-label>
            <input matInput placeholder="Eg: Tech kuribose..." [(ngModel)]="filterInput">
            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
            <mat-hint>Hint</mat-hint>
          </mat-form-field>
        </p>
        <table class="table table-striped-columns">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Event name</th>
              <th scope="col">Event img url</th>
              <th scope="col">Date</th>
              <th scope="row" >Event details</th>
            </tr>
          </thead>
          <tbody class="event_design">
            <tr *ngFor="let item of eventFilter">
              <th scope="row"> {{item.id.substr(item.id.length - 5)}} </th>
              <td>{{item.event_name}}</td>
              <td>{{item.imag_link}}</td>
              <td>{{item.event_date.toMillis() | date:'MM/dd/yyyy' }}</td>
              <td>{{ item.event_details }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </mat-tab>
  </mat-tab-group>
</div>
  `,
  styles: [`
      .btn-color {
        background-color: #495e57;
        color: white;
      }
      .bnt_design{
        float : right;
      }
      .event_design{
        text-align: justify;
      }
      .my_img{
        width: 200px;
        height : 200px;
        background-color: #495e57;
      }
  `]
})
export class EventsManagementComponent implements OnInit {
  public events: any = [];
  public myForm: FormGroup | any;
  public file : any = {};
  public img_url: any;
  public eventFilter: any = [];
  public _filterInput: string = "";
  constructor(private firestore: Firestore, private s_service: SharedService, private fb: FormBuilder, private storage: Storage) { }


  public set filterInput(value : string) {
    this._filterInput = value;
    this.eventFilter = this.filterEquipeByName(value);
  }
  public get filterInput(){
    return this._filterInput;
  }

  public chooseFile(event: any){
    this.file = event.target.files[0];
    console.log("The name of img is : "+this.file.name);
  }
  public postEvents(val : any){
    this.s_service.post_events(val);
    this.getEvents();
    this.postsEventPic();
    this.myForm.reset();
  }
  public postsEventPic(){
    const storageRef = ref(this.storage, `event_page/${this.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on('state_changed',
    (snapshot) =>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes * 100);
      console.log('upload is ' + progress + '% done');
    },
    (error) => {
      console.log(error.message);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
        this.img_url = downloadURL;
        console.log('File availabe at', this.img_url);
      });
    });
  }
  public getEvents(){
    const DbInstance = collection(this.firestore, 'events');
    getDocs(DbInstance).then((response) =>{
      this.events = [...response.docs.map((item) =>{
        return {...item.data(), id: item.id }
      })]
      this.eventFilter = this.events;
    })
  }
  public updateEvent(id : any){
    const DataToUpdate = doc(this.firestore, 'events', id);
    updateDoc(DataToUpdate, {
      event_name : this.myForm.value.event_name,
      event_details : this.myForm.value.event_details,
      event_date : this.myForm.value.event_date,
    }).then(() =>{
      alert('Data updated');
      this.getEvents();
      this.myForm.reset();
    }).catch((error) =>{
      alert(error.message);
    })
  }
  public deleteEvent(id : any){
    const DataToDelete = doc(this.firestore, 'events', id);
    deleteDoc(DataToDelete).then(() =>{
      alert('Delete successful');
      this.getEvents();
    }).catch((error) =>{
      alert(error.message);
    })
  }
  public filterEquipeByName(filterTerm: string){
    if(this.events.length === 0 || this.filterInput ==='')
    {
      return this.events;
    }
    else{
      return this.events.filter((event: any)=>{
        return event.event_name.toLowerCase() === filterTerm.toLowerCase();
      });
    }
  }
  ngOnInit(): void {
    this.getEvents();
    this.myForm = this.fb.group({
      event_name : ['', Validators.required],
      imag_link: [''],
      event_details : ['', Validators.required],
      event_date : ['', Validators.required],
    });
  }
}
