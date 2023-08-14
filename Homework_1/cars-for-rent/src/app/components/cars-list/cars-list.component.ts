import { Component, Input } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent {
  @Input() cars: Car[] = [];
  filteredCars: Car[] = this.cars.slice();

  applyFilter(filterType: string): void {
    if (filterType === 'showRented') {
      this.filteredCars = this.cars.filter((car) => car.isRented);
    } else if (filterType === 'showAvailable') {
      this.filteredCars = this.cars.filter((car) => !car.isRented);
    } else if (filterType === 'reset') {
      this.filteredCars = this.cars.slice();
    }
  }

  toggleRent(car: Car): void {
    car.isRented = !car.isRented;
  }
}
