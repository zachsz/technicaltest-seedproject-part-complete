import { Component, Input } from '@angular/core';
import { BroadbandResult } from "app/types/broadbanddeals";

@Component({
    selector: 'broadband-grid',
    templateUrl: './broadbandGrid.html',
    styleUrls: ['./broadbandGrid.scss']
})
export class BroadbandGrid {
     @Input() deals:BroadbandResult.Deal[];
} 