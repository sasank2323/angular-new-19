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
  numbers = [10, 20, 30, 40];

  users = [
  { id: 1, name: "Sasank" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Kiran" }
];

userDetails = {
  sasank: { age: 23, city: "Hyderabad" },
  ravi: { age: 25, city: "Bangalore" },
};

employee = {
  name: "Sasank",
  skills: ["PHP", "Angular", "SQL"]
};

products = [
  { name: "Laptop", price: 45000 },
  { name: "Phone", price: 15000 }
];


matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


department = {
  hr: ["Anu", "Ravi"],
  tech: ["Sasank", "Kiran", "Vamsi"]
};

companies = [
  {
    name: "Google",
    jobs: ["Engineer", "Manager"]
  },
  {
    name: "Microsoft",
    jobs: ["Dev", "Tester"]
  }
];


fullData = [
  {
    id: 1,
    name: "Sasank",
    address: {
      city: "Hyderabad",
      codes: [500081, 500072]
    }
  },
  {
    id: 2,
    name: "Ravi",
    address: {
      city: "Chennai",
      codes: [600001, 600045]
    }
  }
];



  hide()
  {
    this.x=0;
  }
  show()
  {
    this.x=20;
  }

}
