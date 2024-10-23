import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStandaloneComponent } from './demo-standalone.component';

describe('DemoStandaloneComponent', () => {
  let component: DemoStandaloneComponent;
  let fixture: ComponentFixture<DemoStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
