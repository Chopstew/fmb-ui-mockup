import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';

import { SharedModule } from '@shared/shared.module';
import { LocationStrategy, PathLocationStrategy} from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from "@app/views/welcome/welcome.component";
import { LoginComponent } from "@app/views/login/login.component";
import { SingingOneComponent } from "@app/views/singing-one/singing-one.component";
import { SingingTwoComponent } from "@app/views/singing-two/singing-two.component";
import { SingingThreeComponent } from "@app/views/singing-three/singing-three.component";

@NgModule({
  declarations: [
    AppComponent,
    SingingOneComponent,
    SingingTwoComponent,
    SingingThreeComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
