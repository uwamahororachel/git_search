import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import { resolve } from 'url';
import { reject } from 'q';
import { Userview } from '../userview';
import { Repolist } from '../repolist';
import { from } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  report: Userview;
  userName :string;
  reponse : any;
  repolist: Repolist[];
  constructor(private http: HttpClient,private raissa:UserserviceService ) {

   }

  ngOnInit() {
  }
  search (){
    this.raissa.userService(this.userName);
    this.report=this.raissa.user;
    console.log(this.report) 

    this.raissa.userService(this.userName);
    this.report=this.raissa.user;
    console.log(this.report) 
  //   let promise = new Promise ((resolve , reject) => {
  // this.http.get('https://api.github.com/users/'+this.userName + "?access_token=d01cb9548cffe04e59b685700487958bc798a53a")
  // .subscribe((reponse) => {
  //   this.reponse = reponse;
  //   console.log(this.reponse)
  //   resolve () 
  // },
  // err => {
  //     this.reponse.login="Invalid "

  //  reject()
  // })

  // })

}

}
