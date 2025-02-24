import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);

  if(localStorage.getItem('path') == 'admin'){
    return true;
  }
  router.navigate(['/problem/15/home'])
  return false;
};
