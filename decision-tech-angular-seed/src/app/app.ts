import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { FilterStateService } from 'app/services/filterStateService';
import { Deal } from 'app/types/deals.d';
import { FilterState } from 'app/services/filterStateService.d';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  private subscription: Subscription;
  constructor(http: Http, private _filterStateService: FilterStateService) {
    http
      .get('assets/deals.json')
      .map(res => res.json())
      .subscribe(result => (this.deals = result.deals));
    this.subscription = this._filterStateService
      .getState()
      .subscribe(state => console.log(state));
  }

  title = 'start';
  deals: Deal[] = [];

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
