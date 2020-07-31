import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectLoggedUserToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    ...canActivate(redirectLoggedUserToHome),
  },
  {
    path: 'sign-out',
    component: SignOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
