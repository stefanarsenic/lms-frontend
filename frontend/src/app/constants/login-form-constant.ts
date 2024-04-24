import { IForm } from "../interfaces/form-interface";

export const loginFormConfig: IForm = {
    formTitle: 'Login Form',
    saveBtnTitle: 'Login',
    resetBtnTitle: 'Reset',
    formControls: [{
        "name": "email",
        "label": "Email",
        "placeholder": "email",
        "class": "",
        "type": "text",
        "validators": [
            {
                "validatorName": "required",
                "required": true,
                "message": "Username is Required",
            },
        ]
    },
    {
        "name": "password",
        "label": "Password",
        "placeholder": "Password",
        "class": "",
        "type": "password",
        "validators": [
            {
                "validatorName": "required",
                "required": true,
                "message": "Password is Required",
            },
        ]
    },
],    

}