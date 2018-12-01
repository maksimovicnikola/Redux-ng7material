import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "user",
    component: UserInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
