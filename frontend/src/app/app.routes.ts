import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "forgot-password", component: ForgotPasswordComponent},
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {
        path: "admin", 
        loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule),
    },
    {path: "**", component: NotFoundComponent},
];
