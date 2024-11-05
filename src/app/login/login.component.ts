import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Verifica que las credenciales sean correctas
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    if (this.username === 'admin' && this.password === 'password') {
      // Si el login es exitoso, redirige a '/projects'
      this.router.navigate(['/projects']);
    } else {
      // Si el login falla, redirige o muestra un mensaje de error
      alert('Credenciales incorrectas');
      console.log('Login fallido');
    }
  }
}
