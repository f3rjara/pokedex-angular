import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
/* Components */
import { HomeComponent } from './home.component';
import { OthersPokemonsComponent } from './../../components/others-pokemons/others-pokemons.component';
import { SkeletonComponent } from '@shared/components/atoms/skeleton/skeleton.component';
import { NavbarModule } from '@shared/components/organims/navbar/navbar.module';
import { NavbarComponent } from '@shared/components/organims/navbar/navbar.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        NavbarComponent,
        OthersPokemonsComponent,
        SkeletonComponent,
      ],
      imports: [NavbarModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
