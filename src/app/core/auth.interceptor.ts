import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const t = auth.token;
  const r = t ? req.clone({ setHeaders: { Authorization: `Bearer ${t}` } }) : req;
  return next(r).pipe(catchError((e: HttpErrorResponse) => {
    if (e.status === 401 && t && !req.url.includes('/auth/login') && !req.url.includes('/auth/verify')) auth.logout('expired');
    return throwError(() => e);
  }));
};

/** User-facing message from an RFC 7807 problem response. */
export function errMsg(e: any): string {
  if (e?.name === 'TimeoutError') {
    return 'The server took too long to process the file. For very large files, processing may still be continuing in the background, or please check server logs.';
  }
  return e?.error?.detail || e?.error?.message || (e?.status === 0 ? 'Cannot reach the server or connection timed out' : e?.message) || 'Something went wrong';
}
