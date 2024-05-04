import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { registerFormConfig } from '../../constants/register-form-constant';
import { IForm } from '../../interfaces/form-interface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  constructor(private authService: AuthService, private router: Router){}

  registerForm = registerFormConfig as IForm;

  registerUser(event: SubmitEvent){
    console.log(event);
    this.authService.register(event).subscribe(r => {
      this.router.navigate(['/login']);
    });
  }
}
