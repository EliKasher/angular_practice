import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankLogin } from '../models/bank-login.model';

@Component({
  selector: 'app-bank-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bank-users.component.html',
  styleUrl: './bank-users.component.css'
})

export class BankUsersComponent {
  @Input() data!: BankLogin;
  @HostBinding('attr.class') cssClass = 'row-md-4';
  constructor() {
  }
}
