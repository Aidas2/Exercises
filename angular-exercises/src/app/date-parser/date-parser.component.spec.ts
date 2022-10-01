import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateParserComponent } from './date-parser.component';

describe('DateParserComponent', () => {
  let component: DateParserComponent;
  let fixture: ComponentFixture<DateParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateParserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
