import { Component, Input } from '@angular/core';
import { Deal } from 'app/types/deals.d';

@Component({
  selector: 'broadband-grid',
  templateUrl: './deal-table.html',
  styleUrls: ['./deal-table.scss']
})
export class DealTable {
  @Input() deals: Deal[];
}
