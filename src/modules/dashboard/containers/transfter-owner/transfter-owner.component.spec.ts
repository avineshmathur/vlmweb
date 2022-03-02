import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfterOwnerComponent } from './transfter-owner.component';

describe('TransfterOwnerComponent', () => {
  let component: TransfterOwnerComponent;
  let fixture: ComponentFixture<TransfterOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfterOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfterOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
