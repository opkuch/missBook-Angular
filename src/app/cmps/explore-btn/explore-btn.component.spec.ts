import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBtnComponent } from './explore-btn.component';

describe('ExploreBtnComponent', () => {
  let component: ExploreBtnComponent;
  let fixture: ComponentFixture<ExploreBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
