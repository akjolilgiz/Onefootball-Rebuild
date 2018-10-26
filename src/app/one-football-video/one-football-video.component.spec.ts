import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFootballVideoComponent } from './one-football-video.component';

describe('OneFootballVideoComponent', () => {
  let component: OneFootballVideoComponent;
  let fixture: ComponentFixture<OneFootballVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFootballVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFootballVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
