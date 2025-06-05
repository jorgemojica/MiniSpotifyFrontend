import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const userRoles = authService.getUserRoles();
  const allowedRoles = route.data['roles'] as string[];

  const hasAccess = userRoles.some(role => allowedRoles.includes(role));

  if (hasAccess) {
    return true;
  } else {
    alert('Permissions not enough');
    router.navigate(['/home']);
    return false;
  }

};
