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

  OnSubmitLogin = (event: Event) => {
    event.preventDefault();
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }

  OnPasswordChange = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
  }

  OnUsernameChange = (event: Event) => {
    this.username = (event.target as HTMLInputElement).value;
  }
}
