import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../../interfaces/form-interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  @Input() form!: IForm;
  dynamicFormGroup!: FormGroup;

  @Output() submitEvent: EventEmitter<SubmitEvent> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void{
    if(this.form?.formControls){
      const formGroupControls: {[key: string]: any} = {};
      
      this.form.formControls.forEach((control: IFormControl) => {
        const controlValidators: any = [];

        if(control.validators){
          control.validators.forEach((val: IValidator) => {
            if(val.validatorName === "required") controlValidators.push(Validators.required);
            if(val.validatorName === "email") controlValidators.push(Validators.email);
            if(val.validatorName === "minLenght") controlValidators.push(Validators.minLength(val.minLenght as number));
            if(val.validatorName === "patter") controlValidators.push(Validators.pattern(val.pattern as string));
            if(val.validatorName === "maxLenght") controlValidators.push(Validators.maxLength(val.maxLenght as number));
            Validators
          })
        }
        formGroupControls[control.name] = [control.value || "", controlValidators]
      });
      this.dynamicFormGroup = this.formBuilder.group(formGroupControls, {updateOn: 'submit'});
    }
  }

  onSubmit() {
    this.submitEvent.emit(this.dynamicFormGroup.value);
  }
  resetForm() {
    this.dynamicFormGroup.reset();
  }

  getValidationErrors(control: IFormControl){
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = "";
    control.validators.forEach((validator) => {
      if(myFormControl?.hasError(validator.validatorName as string)){
        errorMessage = validator.message;
      }
    });
    return errorMessage;
  }
}