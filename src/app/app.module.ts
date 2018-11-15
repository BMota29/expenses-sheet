import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaychecksComponent } from './paychecks/paychecks.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PaychecksListComponent } from './paychecks/paychecks-list/paychecks-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import {AuthInterceptor} from './authentication/AuthInterceptor';
import {ErrorsHandler} from './common/ErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaychecksComponent,
    PaychecksListComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true },
    { provide: ErrorHandler,
      useClass: ErrorsHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
