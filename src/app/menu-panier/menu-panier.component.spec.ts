import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanierComponent } from './menu-panier.component';

describe('MenuPanierComponent', () => {
  let component: MenuPanierComponent;
  let fixture: ComponentFixture<MenuPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
