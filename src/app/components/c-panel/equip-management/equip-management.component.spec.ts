import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipManagementComponent } from './equip-management.component';

describe('EquipManagementComponent', () => {
  let component: EquipManagementComponent;
  let fixture: ComponentFixture<EquipManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
