import {NgModule} from '@angular/core';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {PaychecksComponent} from './paychecks/paychecks.component';
import {LoginComponent} from './authentication/login/login.component';
import {AuthGuard} from './authentication/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: PaychecksComponent},
  {path: 'expenses', component: PaychecksComponent, canActivate: [AuthGuard]},
  {path: 'paychecks', component: PaychecksComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
