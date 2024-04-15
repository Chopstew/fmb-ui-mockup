import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "@app/views/login/login.component";
import {SingingOneComponent} from "@app/views/singing-one/singing-one.component";
import {WelcomeComponent} from "@app/views/welcome/welcome.component";
import {SingingTwoComponent} from "@app/views/singing-two/singing-two.component";
import {SingingThreeComponent} from "@app/views/singing-three/singing-three.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: "prefix"
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'singing-one',
    component:SingingOneComponent
  },
  {
    path:'singing-two',
    component:SingingTwoComponent
  },
  {
    path:'singing-three',
    component:SingingThreeComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
