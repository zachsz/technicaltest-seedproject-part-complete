import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BroadbandResult } from "app/types/broadbanddeals";
import { FilterStateService } from "app/services/filterStateService";
import { Subscription } from "rxjs/Subscription";
import { FilterState } from "app/services/filterState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private subscription: Subscription;
  constructor(http: Http, private _filterStateService: FilterStateService) {
    http.get('assets/deals.json')
      .map(res => res.json())
      .subscribe(result => this.deals = result.deals);
    this.subscription = this._filterStateService.getState()
      .subscribe(state => console.log(state));
  }

  title = "start"
  deals: BroadbandResult.Deal[] = []

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
