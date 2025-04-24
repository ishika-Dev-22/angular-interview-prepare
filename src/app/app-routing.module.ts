import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'angular-pipe', loadChildren: () => 
    import('./app-modules/angular-pipe/angular-pipe.module').then(m => m.AngularPipeModule) },
  { path: 'angular-directive', loadChildren: () => 
    import('./app-modules/angular-directive/angular-directive.module').then(m => m.AngularDirectiveModule) },
  { path: 'reactive-form', loadChildren: () => 
    import('./app-modules/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
