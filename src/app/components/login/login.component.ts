import { Component } from '@angular/core';
import { IForm } from '../../interfaces/form-interface';
import { loginFormConfig } from '../../constants/login-form-constant';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService){}

  loginForm: IForm = loginFormConfig;

  login(event: SubmitEvent){
    this.userService.authenticate(event).subscribe(r => {
      localStorage.setItem("token", r.token);
    })
  }
}
