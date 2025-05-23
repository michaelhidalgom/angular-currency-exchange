import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const currentUser = authService.currentUserValue;
  if (currentUser && authService.isAuthenticated()) {
    return true;
  }

  // No está autenticado, redirigir al login
  router.navigate(['/login']);
  return false;
};
