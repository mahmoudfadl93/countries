import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWarpperComponent } from './card-warpper.component';

describe('CardWarpperComponent', () => {
  let component: CardWarpperComponent;
  let fixture: ComponentFixture<CardWarpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWarpperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWarpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
