import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };
  customOptions: Array<any> = [];

  // constructor(private router: Router, private trackService: TrackService) {}
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        // router: ['/'],
        router: ['/', 'auth'],
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' },
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ];

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/'],
      },
      {
        name: 'Mi lista º2',
        router: ['/'],
      },
      {
        name: 'Mi lista º3',
        router: ['/'],
      },
      {
        name: 'Mi lista º4',
        router: ['/'],
      },
    ];

    //TODO > Ejemplo
    // this.trackService.dataTracksRandom$.subscribe((response: any) => {
    //   this.customOptions.push({
    //     name: response[0].name,
    //     router: [],
    //   });
    // });
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      },
    });
    console.log($event);

    // TODO: Url, con parametros solamente
    // TODO: http://localhost/parametro1/parametro2
    // TODO: Url con query params solamenL&
    // TODO: http://localhost/parametro1?query1
  }
}
