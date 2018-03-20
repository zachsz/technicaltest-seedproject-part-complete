import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { FilterState } from './filterStateService.d';

@Injectable()
export class FilterStateService {
  private subject: BehaviorSubject<FilterState>;

  constructor() {
    this.subject = new BehaviorSubject<FilterState>({
      broadband: false,
      tv: false,
      mobile: false
    });
  }

  changeState(newState: FilterState) {
    this.subject.next(newState);
  }

  getState(): BehaviorSubject<FilterState> {
    return this.subject;
  }
}
