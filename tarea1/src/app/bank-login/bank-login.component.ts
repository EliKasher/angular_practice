import { Component } from '@angular/core';
import { BankLogin } from '../models/bank-login.model';
import { EmailValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankUsersComponent } from '../bank-users/bank-users.component';

@Component({
  selector: 'app-bank-login',
  standalone: true,
  imports: [CommonModule, BankUsersComponent],
  templateUrl: './bank-login.component.html',
  styleUrl: './bank-login.component.css'
})

export class BankLoginComponent {
  users: BankLogin[];
  constructor() {
      this.users = [];
  }

  save(nombre:string, rut:string, email:string, password:any):boolean {
    this.users.push(new BankLogin(nombre, rut, email, password))
    console.log(this.users);
    return false;
  }
}