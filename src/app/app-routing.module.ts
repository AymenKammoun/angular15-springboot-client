import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  {path :'', redirectTo :'accounts', pathMatch:'full'},
  {path :'accounts',component: AccountListComponent},
  {path :'add',component: CreateAccountComponent},
  {path :'details/:id',component: AccountDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
