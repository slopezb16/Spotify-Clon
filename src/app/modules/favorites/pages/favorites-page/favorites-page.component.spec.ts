import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesPageComponent } from './favorites-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { FavoritesModule } from '@modules/favorites/favorites.module';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, FavoritesModule, FavoritesPageComponent, PlayListHeaderComponent],
}).compileComponents();

    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
