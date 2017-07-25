import { FilterState } from "./filterState";
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterStateService {

    private subject: BehaviorSubject<FilterState.State>;

    constructor() {
        this.subject = new BehaviorSubject<FilterState.State>(
            {
                productTypes: {
                    broadband: true
                },
                speed: "",
                mobileData: ""
            }
        )
    }

    changeState(newState: FilterState.State) {
        this.subject.next(newState)
    }

    getState(): BehaviorSubject<FilterState.State> {
        return this.subject;
    }

}