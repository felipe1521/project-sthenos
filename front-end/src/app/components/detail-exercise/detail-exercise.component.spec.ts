import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExerciseComponent } from './detail-exercise.component';

describe('DetailExerciseComponent', () => {
  let component: DetailExerciseComponent;
  let fixture: ComponentFixture<DetailExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
