import { Component, signal,WritableSignal,computed } from '@angular/core';
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
  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()*this.y());
 
  increment(){
    this.x.set(this.x()+10);
    console.log(this.z());

  }


}
