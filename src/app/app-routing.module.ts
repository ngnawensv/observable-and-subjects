import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { PromiseComponent } from './promise/promise.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'observable',
    component : ObservableComponent
  },
  {
    path : 'subject',
    component : SubjectComponent
  },
  {
    path : 'promise',
    component : PromiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
