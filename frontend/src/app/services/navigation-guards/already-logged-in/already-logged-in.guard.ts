import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const alreadyLoggedInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const forbiddenRoutes: string[] = ['/login', '/register'];
  
  if(forbiddenRoutes.includes(state.url) && !!localStorage.getItem("token")){
    return false;
  }

  return true;
};
