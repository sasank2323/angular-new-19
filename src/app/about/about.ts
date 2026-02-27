import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  constructor(private router: Router) {

  }

  // navigate() {
  //   this.router.navigate(['/route-check', { id: 100, name: 'sasank', username: 'sasank' }]);
  // }

  navigate() {
    this.router.navigate(['/route-check'], { queryParams: { role: 'admin', id: 100, name: 'sasank', username: 'sasank' } });
  }

}
