import { Component, Input } from '@angular/core';
import { FilterStateService } from "app/services/filterStateService";
import { Subscription } from "rxjs/Subscription";
import { FilterState } from "app/services/filterState";

@Component({
    selector: 'filter-bar',
    templateUrl: './filterBar.html',
    styleUrls: ['./filterBar.scss']
})
export class FilterBar {
    filterState: FilterState.State;
    filterToggleState: boolean;
    filterStateServiceSubscription: Subscription;

    constructor(private _filterStateService: FilterStateService) {
        this.filterStateServiceSubscription = this._filterStateService.getState()
            .subscribe(state =>
                this.filterState = state
            );
    }

    onFilterChanged() {
        this._filterStateService.changeState(this.filterState)
    }

    ngOnDestroy() {
        this.filterStateServiceSubscription.unsubscribe();
    }
} 