import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenttisliderComponent } from './tenttislider.component';

describe('TenttisliderComponent', () => {
  let component: TenttisliderComponent;
  let fixture: ComponentFixture<TenttisliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenttisliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenttisliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
