import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquidGameComponent } from './squid-game.component';

describe('SquidGameComponent', () => {
  let component: SquidGameComponent;
  let fixture: ComponentFixture<SquidGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquidGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquidGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
