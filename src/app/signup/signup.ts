import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  // styleUrl: './signup.css',
  styleUrls: ['./signup.css', './signup.btn.css'], 
  //  adding multiple css files
  // styleUrls: ['h1{color:green;}'] style for single line 
})
export class Signup {

  x=20;
  hide()
  {
    this.x=0;
  }
  show()
  {
    this.x=20;
  }

}
