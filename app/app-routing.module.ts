import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KrViewPageComponent } from './containers/kr-view-page/kr-view-page.component';

const routes: Routes = [
  { path: '', component: KrViewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
