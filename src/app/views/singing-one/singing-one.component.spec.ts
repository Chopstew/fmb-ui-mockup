import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingingOneComponent } from './singing-one.component';

describe('HomeComponent', () => {
  let component: SingingOneComponent;
  let fixture: ComponentFixture<SingingOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingingOneComponent]
    });
    fixture = TestBed.createComponent(SingingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
