import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKeysComponent } from './main-keys.component';

describe('MainKeysComponent', () => {
  let component: MainKeysComponent;
  let fixture: ComponentFixture<MainKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainKeysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
