import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingComponent } from './ping.component';

describe('PingComponent', () => {
  let component: PingComponent;
  let fixture: ComponentFixture<PingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
