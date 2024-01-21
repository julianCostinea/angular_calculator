import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorKeyComponent } from './operator-key.component';

describe('OperatorKeyComponent', () => {
  let component: OperatorKeyComponent;
  let fixture: ComponentFixture<OperatorKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorKeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatorKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
