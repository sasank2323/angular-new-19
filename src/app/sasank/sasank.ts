import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sasank',
  imports: [FormsModule],
  templateUrl: './sasank.html',
  styleUrl: './sasank.css',
})
export class Sasank {
  x = signal({});
  name = "";
  constructor(private http: HttpClient) { }
  getdata() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res) => {
      console.log(res);
      this.x.set(res);
    })
  }

}
