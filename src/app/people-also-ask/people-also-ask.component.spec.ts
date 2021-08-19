import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAlsoAskComponent } from './people-also-ask.component';

describe('PeopleAlsoAskComponent', () => {
  let component: PeopleAlsoAskComponent;
  let fixture: ComponentFixture<PeopleAlsoAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleAlsoAskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAlsoAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
