import { Routes } from '@angular/router';
import { authGuard, permGuard } from './core/guards';
import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: ShellComponent, canActivate: [authGuard], canActivateChild: [permGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', data: { perm: 'view.inventory', title: 'Dashboard' }, loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'inventory/:view', data: { perm: 'view.inventory' }, loadComponent: () => import('./pages/inventory/inventory.component').then(m => m.InventoryComponent) },
      { path: 'matrix', data: { perm: 'view.inventory' }, loadComponent: () => import('./pages/matrix/matrix.component').then(m => m.MatrixComponent) },
      { path: 'years', data: { perm: 'view.years' }, loadComponent: () => import('./pages/years/years.component').then(m => m.YearsComponent) },
      { path: 'actions/:view', data: { perm: 'view.actions' }, loadComponent: () => import('./pages/actions/actions.component').then(m => m.ActionsComponent) },
      { path: 'import', data: { perm: ['import.data', 'export.data'] }, loadComponent: () => import('./pages/import/import.component').then(m => m.ImportComponent) },
      { path: 'data', data: { perm: ['data.edit', 'data.approve'] }, loadComponent: () => import('./pages/data/data.component').then(m => m.DataComponent) },
      { path: 'masters', data: { perm: 'masters.edit' }, loadComponent: () => import('./pages/masters/masters.component').then(m => m.MastersComponent) },
      { path: 'users', data: { perm: ['users.manage', 'audit.view'] }, loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent) },
      { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
