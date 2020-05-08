import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Variables and Interpolation';

  //Boolean
  showDiv : boolean = true;
  //Number 
  intNumber : number = 5;     // Decimal
  hexNumber : number = 0xfff  //Hexadecimal Number
  binNumber : number = 0b0010 //Binary Number
  octNumber : number = 0o744;
  
  //Strings
  welcomeText : string = "Welcome to Angular Tutorial";
  name : string = 'Nixon';
  welcomeMessage : string = `Welcome ${this.name}, to the Angular Tutorial`;

  //Array
  ageGroup : number[] = [1,2,3,4,5];
  namesList : string[] = ['Edward', 'Nixon', 'Augustine'];



}
