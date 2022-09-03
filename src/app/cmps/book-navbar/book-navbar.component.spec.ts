import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNavbarComponent } from './book-navbar.component';

describe('BookNavbarComponent', () => {
  let component: BookNavbarComponent;
  let fixture: ComponentFixture<BookNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
