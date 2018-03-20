import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App } from './app';
import { DealTable } from 'app/deal-table/deal-table';
import { DealFilter } from 'app/deal-filter/deal-filter';
import { FilterStateService } from 'app/services/filterStateService';
import { SiteNav } from 'app/site-nav/site-nav';

@NgModule({
  declarations: [App, DealTable, DealFilter, SiteNav],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [FilterStateService],
  bootstrap: [App]
})
export class AppModule {}
