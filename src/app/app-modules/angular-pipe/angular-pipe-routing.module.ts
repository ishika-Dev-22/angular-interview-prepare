import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPipeComponent } from './angular-pipe.component';

const routes: Routes = [
  {path: '', component: AngularPipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPipeRoutingModule { }
