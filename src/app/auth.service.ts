import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, tap } from 'rxjs';

interface AuthResponse {
  token: string;
  userId: string;
  role: 'admin' | 'member';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject<{
    token: string;
    userId: string;
    role: 'admin' | 'member';
  } | null>(null);

  get isAuthenticated() {
    return this.authSubject.asObservable().pipe(
      map((auth) => !!auth)
    );
  }

  get userRole() {
    return this.authSubject.asObservable().pipe(
      map((auth) => auth?.role || null)
    );
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<AuthResponse>('/api/auth/login', { email, password })
      .pipe(
        tap((response) => {
          this.authSubject.next(response);
          localStorage.setItem('authData', JSON.stringify(response));
        })
      );
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('authData');
    this.router.navigate(['/login']);
  }

  autoLogin() {
    const authDataString = localStorage.getItem('authData');
    const authData = authDataString ? JSON.parse(authDataString) : null;
    if (!authData) {
      return;
    }

    this.authSubject.next(authData);
  }
}