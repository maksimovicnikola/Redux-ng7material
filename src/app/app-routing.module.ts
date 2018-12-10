import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "contact",
    component: ContactInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
