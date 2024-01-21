import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberKeyComponent } from './number-key.component';

describe('NumberKeyComponent', () => {
  let component: NumberKeyComponent;
  let fixture: ComponentFixture<NumberKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberKeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
