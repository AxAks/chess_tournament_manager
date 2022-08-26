import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingTournamentComponent } from './ongoing-tournament.component';

describe('OngoingTournamentComponent', () => {
  let component: OngoingTournamentComponent;
  let fixture: ComponentFixture<OngoingTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
