import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('problem')) {
    return true;
  }

  router.navigate(['/problem/1']);
  return false;
};
