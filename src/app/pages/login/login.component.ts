import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [NgIf, FormsModule]
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(event: Event) {
    event.preventDefault();
    // Simulação de login (substitua por lógica real depois)
    if (this.email === 'admin@admin.com' && this.password === '123456') {
      this.auth.login();
      this.router.navigate(['/']);
    } else {
      this.error = 'E-mail ou senha inválidos';
    }
  }
}
