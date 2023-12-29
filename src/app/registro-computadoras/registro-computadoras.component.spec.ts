import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComputadorasComponent } from './registro-computadoras.component';

describe('RegistroComputadorasComponent', () => {
  let component: RegistroComputadorasComponent;
  let fixture: ComponentFixture<RegistroComputadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroComputadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
