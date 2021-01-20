import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyMastersComponent } from './party-masters.component';

describe('PartyMastersComponent', () => {
  let component: PartyMastersComponent;
  let fixture: ComponentFixture<PartyMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
