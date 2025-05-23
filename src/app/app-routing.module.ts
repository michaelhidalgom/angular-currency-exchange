import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CurrencyExchangeComponent } from './components/currency-exchange/currency-exchange.component';
import { ExchangeHistoryComponent } from './components/exchange-history/exchange-history.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'exchange', component: CurrencyExchangeComponent, canActivate: [authGuard] },
  { path: 'history', component: ExchangeHistoryComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
