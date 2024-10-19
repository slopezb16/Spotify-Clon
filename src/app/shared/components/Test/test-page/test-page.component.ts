import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
})
export class TestPageComponent {
  data: any[] = [];
  //TODO Fecha
  dataValue = new Date();

  dataRaw = { a: 1, name: 'Santiago', email: 'test@test.com' };

  ngOnInit(): void {
    const { data }: any = (this.dataRaw as any).default;
    this.data = data;
    console.log(this.dataValue);
  }
}
