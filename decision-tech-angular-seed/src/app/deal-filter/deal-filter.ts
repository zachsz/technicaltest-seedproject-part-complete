import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FilterStateService } from 'app/services/filterStateService';
import { FilterState } from 'app/services/filterStateService.d';

@Component({
  selector: 'filter-bar',
  templateUrl: './deal-filter.html',
  styleUrls: ['./deal-filter.scss']
})
export class DealFilter {
  state: {
    broadband: boolean;
    tv: boolean;
    mobile: boolean;
  };
  filterStateServiceSubscription: Subscription;

  constructor(private _filterStateService: FilterStateService) {
    this.filterStateServiceSubscription = this._filterStateService
      .getState()
      .subscribe(state => (this.state = state));
  }

  onFilterChanged(event) {
    console.log(event);
  }

  ngOnDestroy() {
    this.filterStateServiceSubscription.unsubscribe();
  }
}
