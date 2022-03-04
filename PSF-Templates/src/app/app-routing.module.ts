import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
    {
      path: '',
      loadChildren: () => import('./auth/auth.module').then(authModule => authModule.AuthModule)
    },

    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(DashboardModule => DashboardModule.DashboardModule),canActivate: [AuthGuard]
    }
    
    // {
    //   path: '**',
    //   loadChildren: () => import('./auth/auth.module').then(authModule => authModule.AuthModule)
    // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
