import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';

const redirectUnauthorizedToWelcome = () => redirectUnauthorizedTo(['welcome']);
const redirectLoggedUserToHome = () => redirectLoggedInTo(['']);
const onlyAllowSelf = (next) =>
  map((user) => !!user && (user as any).uid === next.params.id);

const routes: Routes = [
  {
    path: 'welcome',
    ...canActivate(redirectLoggedUserToHome),
    loadChildren: () =>
      import(`./welcome/welcome.module`).then((m) => m.WelcomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToWelcome,
    },
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import(`./profile/profile.module`).then((m) => m.ProfileModule),
    ...canActivate(onlyAllowSelf),
  },
  {
    path: '',
    ...canActivate(redirectUnauthorizedToWelcome),
    children: [
      {
        path: 'write-post',
        loadChildren: () =>
          import(`./write-post/write-post.module`).then(
            (m) => m.WritePostModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import(`./settings/settings.module`).then((m) => m.SettingsModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      // preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// const redirectToProfile = () =>
//   map((user) =>
//     user ? ['firebase-demo-v1', 'profile', (user as any).uid] : true
//   );

// const onlyAllowSelf = (next) =>
//   map((user) => (!!user && next.params.id == (user as any).uid) || ['login']);
