import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideKeysComponent } from './side-keys.component';

describe('SideKeysComponent', () => {
  let component: SideKeysComponent;
  let fixture: ComponentFixture<SideKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideKeysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
