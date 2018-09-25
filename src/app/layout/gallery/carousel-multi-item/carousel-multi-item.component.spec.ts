import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultiItemComponent } from './carousel-multi-item.component';

describe('CarouselMultiItemComponent', () => {
  let component: CarouselMultiItemComponent;
  let fixture: ComponentFixture<CarouselMultiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMultiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMultiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
