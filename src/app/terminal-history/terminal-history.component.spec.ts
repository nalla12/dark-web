import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalHistoryComponent } from './terminal-history.component';

describe('TerminalHistoryComponent', () => {
  let component: TerminalHistoryComponent;
  let fixture: ComponentFixture<TerminalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
