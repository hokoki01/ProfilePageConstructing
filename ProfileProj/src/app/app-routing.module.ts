// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/profile.component'; // Import ProfilePageComponent

const routes: Routes = [
  { path: 'profile', component: ProfilePageComponent } // Define a route for ProfilePageComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
