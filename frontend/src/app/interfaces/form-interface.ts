export interface IForm{
    formTitle: string,
    saveBtnTitle: string,
    submitButtonLink: string,
    resetBtnTitle: string,
    formControls: IFormControl[]
}

export interface IFormControl{
  name: string
  label: string
  value?: string
  options?: IOptions[]
  radioOptions?: string[]
  placeholder?: string
  class: string
  type: string
  validators: IValidator[]
}

export interface IValidator {
  validatorName: string
  required?: boolean
  pattern?: string
  message: string
  minLenght?: number
  maxLenght?: number
  email?: string
}

export interface IOptions{
    id? : number,
    value? : string
}

