import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { authGuard } from './services/navigation-guards/auth/auth.guard';
import { alreadyLoggedInGuard } from './services/navigation-guards/already-logged-in/already-logged-in.guard';

export const routes: Routes = [
    {path: "login", component: LoginComponent, canActivate: [alreadyLoggedInGuard]},
    {path: "register", component: RegisterComponent, canActivate: [alreadyLoggedInGuard]},
    {path: "forgot-password", component: ForgotPasswordComponent},
    {path: "home-page", component: HomePageComponent, canActivate: [authGuard]},
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {
        path: "admin", 
        loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule),
    },
    {path: "**", component: NotFoundComponent},
];

