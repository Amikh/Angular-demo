import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
    ) {
   }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



@Injectable()
export class AppComponent {
  title = 'sample-angular-app';

   private REST_API_SERVER = "http://localhost:8080/product";

   constructor(private http: HttpClient) { }
   httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  
  // isGetProduct() : boolean{
  //     this.http.get(this.REST_API_SERVER).subscribe(data => {
  //     console.log(data);
  //   },
  //     error => {
  //         console.log('Log the error here: ', error);
  //     });
  //   return false;
  // }
  

    isGetProduct() : boolean{
      this.http.get(this.REST_API_SERVER).subscribe(data => {
      console.log(data);


    },
      error => {
          console.log('Log the error here: ', error);
      });




    return false;
  }

    
  


  }



