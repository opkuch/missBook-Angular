import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLogoComponent } from './book-logo.component';

describe('BookLogoComponent', () => {
  let component: BookLogoComponent;
  let fixture: ComponentFixture<BookLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
