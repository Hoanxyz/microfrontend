import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Module').then(m => m.Mfe1Module)
  },
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Module').then(m => m.Mfe2Module)
  },
  { path: '', redirectTo: 'mfe1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
