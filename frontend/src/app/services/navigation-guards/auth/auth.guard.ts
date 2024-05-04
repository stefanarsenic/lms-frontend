import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home-page']

  return protectedRoutes.includes(state.url) && !localStorage.getItem("token") ? router.navigate(['/login']) : true;
};
 