import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'MyFirstAngularApp';
  
  //let us take some instance data
  name:string="Angular";
  version:number=11;
  instructor:string="Rajesh";
  courseDetails={
    duration:"2 months",
    modeOfTraining:"Online"
  }

  imagePath:string="data:image/jpeg;base64,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"

  status:boolean=false;

  data:string;
  //define method
  sendData(d){
    console.log("data received from component view is",d);
    this.data=d;
  }
//status for structural directive
statusSd:boolean=true;
//to create toggle function we must change the statusSd 
changeStatusSd(){
  this.statusSd=!this.statusSd;
}

//taking an array to learn about *ngFor
arr:number[]=[10,20,30,40,50];


//To-Do list


todoItems:string[]=[];
//to add item into the list
sendItem(item){
  //console.log(item);
  
  //push item into array
  this.todoItems.push(item);
}

//to delete item from the list
deleteItem(index){
  this.todoItems.splice(index,1)
}

//addItem() while using two-way data binding
item:string;
addItem(){
  this.todoItems.push(this.item);
  this.item="";
}



//submitting data of a form
users=[];
addUserData(ref:NgForm){
  //console.log('hi');
  //console.log(ref.value);
  //let userObj=ref.value;
  //this.users.push(userObj);
  //console.log(this.users);
  //ref.reset;
}


//creating custom datatype object
userObj:User={username:"",dob:"",email:""};
addUserData1(){
console.log(this.userObj);
this.userObj={username:"",dob:"",email:""};
}
}
