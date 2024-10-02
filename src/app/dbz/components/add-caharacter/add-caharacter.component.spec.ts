import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaharacterComponent } from './add-caharacter.component';

describe('AddCaharacterComponent', () => {
  let component: AddCaharacterComponent;
  let fixture: ComponentFixture<AddCaharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCaharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCaharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
