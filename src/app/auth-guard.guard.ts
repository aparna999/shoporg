import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.user$.pipe(
    map((user) => {
      if (user) return true;

      router.navigate(['/login']);
      return false;
    })
  );
};
