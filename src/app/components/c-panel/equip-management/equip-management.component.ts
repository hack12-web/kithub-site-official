import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  snapToData
 } from '@angular/fire/firestore';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-equip-management',
  template: `
    <mat-tab-group class="mtg container-fluid">
      <mat-tab label="ADD RECORD">
        <div class="container-fluid">
          <form [formGroup]="myForm" (submit)="addEquipe(myForm.value)">
            <br />
            <mat-form-field appearance="fill">
              <mat-label>First name</mat-label>
              <input type="text" matInput placeholder="eg: Nyongero" autocomplete="off" formControlName="Fname"  />
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            &nbsp;
            <mat-form-field appearance="fill">
              <mat-label>Last name</mat-label>
              <input type="text" matInput placeholder="eg: Claude " autocomplete="off" formControlName="Lname" />
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            <br />
            <mat-form-field appearance="fill">
              <mat-label>Role</mat-label>
              <textarea matInput placeholder="eg: CEO " formControlName="Role" ></textarea>
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            &nbsp;
            <mat-form-field appearance="fill">
              <mat-label>Description</mat-label>
              <textarea matInput placeholder="eg: Details " formControlName="Description" ></textarea>
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            <br />
            <div>
              <input aria-label="picture" type="file" name="picture"  id="picture" (change)="chooseFile($event)" />
            </div>
            <br /><br />
            <p class="text-center">
              <button type="submit" mat-flat-button class="btn-color bnt_design" [disabled]="myForm.invalid" >ADD RECORD</button>
            </p>
          </form>
        </div>
      </mat-tab>
      <mat-tab label="UPDATE AND DELETE RECORD">
        <div class="container-fluid">
          <form [formGroup]="myForm">
            <br />
            <mat-form-field appearance="fill">
              <mat-label>First name</mat-label>
              <input type="text" matInput placeholder="eg: Nyongero" autocomplete="off" formControlName="Fname"  />
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            &nbsp;
            <mat-form-field appearance="fill">
              <mat-label>Last name</mat-label>
              <input type="text" matInput placeholder="eg: Claude " autocomplete="off" formControlName="Lname" />
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            <br />
            <mat-form-field appearance="fill">
              <mat-label>Role</mat-label>
              <textarea matInput placeholder="eg: CEO " formControlName="Role" ></textarea>
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            &nbsp;
            <mat-form-field appearance="fill">
              <mat-label>Description</mat-label>
              <textarea matInput placeholder="eg: Details " formControlName="Description" ></textarea>
              <mat-icon matSuffix>mode_edit</mat-icon>
            </mat-form-field>
            <br />
            <div>
              <input aria-label="picture" type="file" name="picture"  id="picture" formControlName="PName" (change)="chooseFile($event)" />
            </div>
            <br /><br />
          </form>
          <div id="table">
            <table class="table table-striped-columns">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Description</th>
                  <th scope="col" >Update</th>
                  <th scope="col" >Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of equipes">
                  <th scope="row"> {{item.id.substr(item.id.length -5)}} </th>
                  <td>{{item.Fname}}</td>
                  <td>{{item.Lname}}</td>
                  <td>{{item.Role}}</td>
                  <td>{{item.Description}}</td>
                  <td>
                    <button mat-raised-button (click)="updateEquipe(item.id)" [disabled]="myForm.invalid">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button mat-raised-button (click)="deleteEquipe(item.id)">
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
        </div>
      </mat-tab>
      <mat-tab label="VIEWS RECORDS">
        <br><br>
        <div class="container-fluid">
          <p class="mt-3">
            <mat-form-field appearance="outline">
              <mat-label>Find By First name</mat-label>
              <input matInput placeholder="Eg: Kaluya..." [(ngModel)]="filterInput" autocomplete="off">
              <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
              <mat-hint>Hint</mat-hint>
            </mat-form-field>
          </p>
        <div id="table">
            <table class="table table-striped-columns">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Description</th>
                  <th scope="row" >Image</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of equipesFilter">
                  <th scope="row"> {{item.id.substr(item.id.length -5)}} </th>
                  <td>{{item.Fname}}</td>
                  <td>{{item.Lname}}</td>
                  <td>{{item.Role}}</td>
                  <td>{{item.Description}}</td>
                  <td>{{item.PName }}</td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
      .btn-color {
        background-color: #495e57;
        color: white;
      }
      .bnt_design{
        float : right;
      }
    `,
  ],
})
export class EquipManagementComponent implements OnInit {

  public myForm: FormGroup | any ;
  public file: any = {};
  public equipes: any = [];
  public equipesFilter: any = [];
  public _filterInput: string = "";
  public image_url: string = "";

  constructor(private fb: FormBuilder, private storage: Storage, private firestore: Firestore, private s_service: SharedService) {
    this.myForm = this.fb.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Role : ['', Validators.required],
      Description: ['', Validators.required],
      PName: ['']
    });
  }

  chooseFile(event : any){
    this.file = event.target.files[0];
    console.log(this.file.name);
  }
  public addImg(){
    const storageRef = ref(this.storage, `equipe_img/${this.file.name}`);
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
        // this.image_url = downloadURL;
        //this.myForm.value.PName = downloadURL;
        console.log(downloadURL);
      });
    })
  }
  public addEquipe(val : any){
    this.addImg();
    this.s_service.post_equipe(val);
    this.getEquipe();
    this.myForm.reset();
  }
  public updateEquipe(id : any){
    const DataToUpdate = doc(this.firestore, 'equipe', id);
    updateDoc(DataToUpdate, {
      Fname : this.myForm.value.Fname,
      Lname : this.myForm.value.Lname,
      Role : this.myForm.value.Role,
      Description: this.myForm.value.Description
    }).then(() =>{
      alert('Data updated');
      this.getEquipe();
      this.myForm.reset();
    }).catch((error) =>{
      alert(error.message);
    })
  }
  public deleteEquipe(id:any){
    this.s_service.delete_equipe(id);
    this.getEquipe();
  }
  public getEquipe(){
    const DbInstance = collection(this.firestore, 'equipe');
    getDocs(DbInstance).then((response) =>{
      this.equipes = [...response.docs.map((item) =>{
        return{...item.data(), id: item.id }
      })]
      this.equipesFilter = this.equipes;
    })
  }
  public get filterInput(){
    return this._filterInput;
  }
  public set filterInput(value : string) {
    this._filterInput = value;
    this.equipesFilter = this.filterEquipeByName(value);
  }
  public filterEquipeByName(filterTerm: string){
    if(this.equipes.length === 0 || this.filterInput ==='')
    {
      return this.equipes;
    }
    else{
      return this.equipes.filter((eq: any)=>{
        return eq.Fname.toLowerCase() === filterTerm.toLowerCase();
      });
    }
  }
  ngOnInit(): void {
    this.getEquipe();
  }
}
