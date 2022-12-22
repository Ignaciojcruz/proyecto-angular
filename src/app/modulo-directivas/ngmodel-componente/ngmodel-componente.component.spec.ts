import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelComponenteComponent } from './ngmodel-componente.component';

describe('NgmodelComponenteComponent', () => {
  let component: NgmodelComponenteComponent;
  let fixture: ComponentFixture<NgmodelComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodelComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
