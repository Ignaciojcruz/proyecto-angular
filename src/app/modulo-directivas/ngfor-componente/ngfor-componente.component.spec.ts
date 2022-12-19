import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforComponenteComponent } from './ngfor-componente.component';

describe('NgforComponenteComponent', () => {
  let component: NgforComponenteComponent;
  let fixture: ComponentFixture<NgforComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
