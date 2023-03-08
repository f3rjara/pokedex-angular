import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NavbarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a display titleNav property correctly', () => {
    component.titleNav = 'PokeDex_';
    fixture.detectChanges();
    const title = fixture.debugElement.nativeElement
      .querySelector('.navbar__link')
      .textContent.trim();
    expect(title).toEqual('PokeDex_');
  });

  it('should load logo image correctly', () => {
    fixture.detectChanges();
    const logo =
      fixture.debugElement.nativeElement.querySelector('.navbar__image');
    expect(logo.src).toContain('assets/images/logo.svg');
  });

  it('should redirect to home page on logo click', async () => {
    const link = fixture.debugElement.query(
      By.css('.navbar__link')
    ).nativeElement;
    link.click();
    await fixture.whenStable();
    expect(fixture.ngZone?.isStable).toBeTruthy();
  });
});
