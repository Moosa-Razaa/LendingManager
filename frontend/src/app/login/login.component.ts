import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  OnSubmitLogin() 
  {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
