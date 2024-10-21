import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Spotify';
  // tipos de datos
  // // string
  // name: string = 'Santiago'
  // // number
  // age: number = 23
  // // null
  // phone: null = null
  // // undefined
  // phone1: undefined = undefined
  // // any - lo que sea
  // datum: any;
  //boolean
  // status: string | number = 1
  // status: string | number = 'Hola'

  // car: CarModel = {
  //   brand: 'Ford',
  //   model: 'Focus',
  //   year: 2015
  // }

  // // lista de carros
  // listCard: Array<CarModel> = [
  //   {
  //     brand: 'Ford',
  //     model: 'Focus',
  //     year: 2015
  //   },
  //   {
  //     brand: 'BMW',
  //     model: 'AMG 200',
  //     year: 2020
  //     },
  // // listCard: Array<any> = [
  //   // { brand: 'Ford', model: 'Focus', year: 2015 },
  //   // { brand: 'Ford', model: 'Mustang', year: 2018 },
  // ]
}

// Interface
// interface CarModel {
//   brand: string;
//   model: string;
//   year?: number; // Opcional
// }
