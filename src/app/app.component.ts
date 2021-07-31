import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

export class Friend {

  constructor(
    public id: number,
    public price: number,
    public name: string
  ) {
  }
}
export class Product {

  constructor(
    public name: string
  ) {
  }
}
 
export class Sla {

  constructor(
    public num: number
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
  [x: string]: any;
  
  frends: Friend[] = [];
  prod: Product[] = [];
  arnum: Sla[] = [];

  
  private REST_API_SERVER = "http://localhost:8080/";


  
   constructor(private http: HttpClient) { }
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  


  

    isGetProduct() : boolean{
      console.log("HOHOHOHOHO");
      this.http.get<any>(this.REST_API_SERVER+"product").subscribe(
        response => {
          console.log(response);
          this.friends = response;
        }
      );
    
    return false;
  }

 isGetProduct1() : boolean{
      console.log("HOHOHOHOHO");
      this.http.get<any>(this.REST_API_SERVER+"product").subscribe(
        response => {
          console.log(response);
          this.prod = response;
        }
      );
    
    return false;
  }


  isSla() : boolean{


    console.log("HOHOHOHOHO");
    this.http.get<any>("http://localhost:8080/sla").subscribe(
      response => {
        console.log( "Response number : "+response);
        var aa = response;
        let customObj = new Sla(aa);
        customObj.num = aa; 
        this.arnum.push(customObj); 
         

      }
    );
  
  return false;
}





  }



