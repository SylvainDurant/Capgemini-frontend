import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAccountModalComponent } from './find-account-modal.component';

describe('FindAccountModalComponent', () => {
  let component: FindAccountModalComponent;
  let fixture: ComponentFixture<FindAccountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAccountModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
