import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sasank } from './sasank';

describe('Sasank', () => {
  let component: Sasank;
  let fixture: ComponentFixture<Sasank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sasank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sasank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
