import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingingTwoComponent } from './singing-two.component';

describe('SingingTwoComponent', () => {
  let component: SingingTwoComponent;
  let fixture: ComponentFixture<SingingTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingingTwoComponent]
    });
    fixture = TestBed.createComponent(SingingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
