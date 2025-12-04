import { Component, signal } from '@angular/core';
import { Signup } from '../signup/signup';

@Component({
  selector: 'app-login',
  imports: [Signup],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  count=signal(10);
  x=10;
}
