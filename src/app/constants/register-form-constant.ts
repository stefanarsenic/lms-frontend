import { IForm } from "../interfaces/form-interface";

export const registerFormConfig: IForm = {
    formTitle: 'Registration Form',
    saveBtnTitle: 'Register',
    resetBtnTitle: 'Reset',
    formControls: [{
        "name": "firstName",
        "label": "FirstName",
        "placeholder": "First Name",
        "class": "",
        "type": "text",
        "validators": [
            {
                "validatorName": "required",
                "required": true,
                "message": "Firs name is Required",
            },
            {
                "validatorName": "minLenght",
                "minLenght": 5,
                "message": "Minimum char should be 5",
            }
        ]
    },
    {
        "name": "lastName",
        "label": "LastName",
        "placeholder": "Last Name",
        "class": "",
        "type": "text",
        "validators": [
            {
                "validatorName": "required",
                "required": true,
                "message": "Last name is Required",
            },
            {
                "validatorName": "minLenght",
                "minLenght": 5,
                "message": "Minimum char should be 5",
            }
        ]
    },
    {
        "name": "email",
        "label": "Email",
        "placeholder": "Email",
        "class": "",
        "type": "text",
        "validators": [
            {
                "validatorName": "required",
                "required": true,
                "message": "Email is Required",
            },
            {
                "validatorName": "minLenght",
                "minLenght": 5,
                "message": "Minimum char should be 5",
            }
        ]
    },
    {
        "name": "password",
        "label": "Password",
        "placeholder": "Password",
        "class": "",
        "type": "text",
        "validators": [
            {
                "validatorName": "required",
                "required": true,
                "message": "Password is Required",
            },
            {
                "validatorName": "minLenght",
                "minLenght": 5,
                "message": "Minimum char should be 5",
            }
        ]
    },
        
],    

}