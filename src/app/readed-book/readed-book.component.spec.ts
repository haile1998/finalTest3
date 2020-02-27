import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadedBookComponent } from './readed-book.component';

describe('ReadedBookComponent', () => {
  let component: ReadedBookComponent;
  let fixture: ComponentFixture<ReadedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
