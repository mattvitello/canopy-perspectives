import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TreesComponent } from './trees/trees.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trees', component: TreesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
