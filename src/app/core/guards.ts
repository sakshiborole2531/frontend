import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService), router = inject(Router);
  if (auth.me()) return true;
  if (!auth.token) return router.parseUrl('/login');
  return auth.resume().pipe(map(() => true), catchError(() => of(router.parseUrl('/login'))));
};

/** Route-level authorization: the route's data.perm (any of). */
export const permGuard: CanActivateFn = route => {
  const auth = inject(AuthService), router = inject(Router), toast = inject(ToastService);
  const p = route.data['perm'];
  if (!p || auth.can(p)) return true;
  toast.show('Access denied — your role cannot open this page');
  return router.parseUrl(auth.can('view.inventory') ? '/dashboard' : '/profile');
};
