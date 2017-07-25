import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BroadbandGrid } from "app/broadbandGrid/broadbandGrid";
import { FilterBar } from "app/filterBar/filterBar";
import { FilterStateService } from "app/services/filterStateService";
import { SiteNav } from "app/siteNav/siteNav";
import { BurgerMenu } from "app/burgerMenu/burgerMenu";


@NgModule({
  declarations: [
    AppComponent,
    BroadbandGrid,
    FilterBar,
    SiteNav,
    BurgerMenu
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilterStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
