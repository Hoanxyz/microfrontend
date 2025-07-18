import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('mfe1/Module').then(m => m.Mfe1Module)
  },
  {
    path: '',
    loadChildren: () => import('mfe2/Module').then(m => m.Mfe2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
