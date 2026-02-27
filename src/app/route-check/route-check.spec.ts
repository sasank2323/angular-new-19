import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCheck } from './route-check';

describe('RouteCheck', () => {
  let component: RouteCheck;
  let fixture: ComponentFixture<RouteCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteCheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
