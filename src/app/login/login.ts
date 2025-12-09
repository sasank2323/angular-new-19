import { Component, signal,WritableSignal } from '@angular/core';
import { Signup } from '../signup/signup';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Signup],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  count=signal(10);
  colors = signal(['red', 'green', 'blue']);
  x=10;
ss: WritableSignal<number> = signal(5);

  constructor() {   
  this.count.set(this.count() + 1);
  }

  increment(){
   // this.count.set(this.count() + 1);
   this.count.update(n => n + 1);
   this.colors.update(cols => [...cols, 'yellow']);

  }


}
