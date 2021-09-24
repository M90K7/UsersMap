import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as cmp from "components";

const routes: Routes = [
  { path: "", component: cmp.UsersComponent, pathMatch: "full" },
  { path: "**", redirectTo: "" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
