import { Component, signal,WritableSignal,computed,effect } from '@angular/core';
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
  m=signal(0);
 
  increment(){
    this.x.set(this.x()+1);
    console.log(this.z());

  }

  constructor(){
   effect(()=>{
    if(this.x()%4===0){
      this.m.set(0);
    }else{
      this.m.set(1);
    }
   });
  }


}
