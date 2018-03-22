import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailTandPartComponent } from './avail-tand-part.component';

describe('AvailTandPartComponent', () => {
  let component: AvailTandPartComponent;
  let fixture: ComponentFixture<AvailTandPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailTandPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailTandPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
