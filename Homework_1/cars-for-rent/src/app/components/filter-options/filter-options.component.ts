import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss'],
})
export class FilterOptionsComponent {
  @Output() filterChanged = new EventEmitter<string>();

  showRentedCars(): void {
    this.filterChanged.emit('showRented');
  }

  showAvailableCars(): void {
    this.filterChanged.emit('showAvailable');
  }

  resetFilter(): void {
    this.filterChanged.emit('reset');
  }
}
