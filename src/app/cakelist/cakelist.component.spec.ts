import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakelistComponent } from './cakelist.component';

describe('CakelistComponent', () => {
  let component: CakelistComponent;
  let fixture: ComponentFixture<CakelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakelistComponent]
    });
    fixture = TestBed.createComponent(CakelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
