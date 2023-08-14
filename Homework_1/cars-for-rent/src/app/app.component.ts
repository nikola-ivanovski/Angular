import { Component } from '@angular/core';
import { Car } from './interfaces/car.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  welcomeMessage = 'Welcome to our Car Rental Service!';
  introductoryMessage = 'Choose from our selection of high-quality rentar cars';

  cars: Car[] = [
    {
      id: 1,
      model: 'Toyota Corolla',
      engineType: 'Gasoline',
      yearOfProduction: '2022',
      priceToRent: 50,
      image: '',
      isRented: false,
    },
    {
      id: 1,
      model: 'Toyota Corolla',
      engineType: 'Gasoline',
      yearOfProduction: '2022',
      priceToRent: 50,
      image: '',
      isRented: false,
    },
    {
      id: 1,
      model: 'Toyota Corolla',
      engineType: 'Gasoline',
      yearOfProduction: '2022',
      priceToRent: 50,
      image: '',
      isRented: false,
    },
  ];
}
