import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingingThreeComponent } from './singing-three.component';

describe('SingingThreeComponent', () => {
  let component: SingingThreeComponent;
  let fixture: ComponentFixture<SingingThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingingThreeComponent]
    });
    fixture = TestBed.createComponent(SingingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
