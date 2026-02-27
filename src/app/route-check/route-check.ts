import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-check',
  imports: [],
  templateUrl: './route-check.html',
  styleUrl: './route-check.css',
})
export class RouteCheck {
  id: string | null = null;
  name: string | null = null;
  username: string | null = null;
  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'] || null;
    // this.name = this.route.snapshot.params['name'] || null;
    // this.username = this.route.snapshot.params['username'] || null;
  }
  // both places we can get data but use ngon init because constructor is for dependency injection 
  ngOnInit() {
    // here you can call apis or get values 
    this.id = this.route.snapshot.params['id'] || null;
    this.name = this.route.snapshot.params['name'] || null;
    this.username = this.route.snapshot.params['username'] || null;

    this.route.queryParams.subscribe((params) => {
      this.id = params['id'] || null;
      this.name = params['name'] || null;
      this.username = params['username'] || null;
    });

    //or 

    this.route.data.subscribe((data) => {
      this.id = data['id'] || null;
      this.name = data['name'] || null;
      this.username = data['username'] || null;
    });
  }


}


// 🚀 What is ActivatedRoute in Angular?
// ActivatedRoute is a service provided by Angular Router.
// It gives you information about the current active route.
// In simple words:
// 👉 It helps you read data from the URL.
// 📌 Example URL
// http://localhost:4200/user/101/sai?role=admin
// From this URL, you can get:
// Route parameters → 101, sai
// Query parameters → role=admin
// Route data
// Route fragment