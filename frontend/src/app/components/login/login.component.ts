import { Component } from '@angular/core';
import { IForm } from '../../interfaces/form-interface';
import { loginFormConfig } from '../../constants/login-form-constant';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router){}

  loginForm: IForm = loginFormConfig;

  login(event: SubmitEvent){
    this.authService.authenticate(event).subscribe(r => {
      localStorage.setItem("token", r.token);
      localStorage.setItem("user", r.user.role);
      this.router.navigate(['/home-page']);
    })
  }
}
