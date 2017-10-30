import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavigatorComponent } from './Navigator/navigator.component';
import {DownborderComponent} from './DownBorder/downborder.component';
import {FormComponent} from './Form/form.component';
import {DownNavBarComponent} from './DownNavbar/DownNavBar.component';
import {BorderComponent} from './Border/border.component';
import {HeaderImageComponent} from './HeaderImage/HeaderImage.component';



@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ AppComponent , NavigatorComponent , DownborderComponent , FormComponent , DownNavBarComponent , BorderComponent , HeaderImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
