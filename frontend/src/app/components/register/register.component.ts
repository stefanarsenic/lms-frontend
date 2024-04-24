import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { registerFormConfig } from '../../constants/register-form-constant';
import { IForm } from '../../interfaces/form-interface';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  constructor(private userService: UserService){}

  registerForm = registerFormConfig as IForm;

  registerUser(event: SubmitEvent){
    this.userService.register(event).subscribe(r => {
      localStorage.setItem("token", r.token);
    });
  }
}
