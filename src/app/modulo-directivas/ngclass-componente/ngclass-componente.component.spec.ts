import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassComponenteComponent } from './ngclass-componente.component';

describe('NgclassComponenteComponent', () => {
  let component: NgclassComponenteComponent;
  let fixture: ComponentFixture<NgclassComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
