import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherBoxComponent } from './another-box.component';

describe('AnotherBoxComponent', () => {
  let component: AnotherBoxComponent;
  let fixture: ComponentFixture<AnotherBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
