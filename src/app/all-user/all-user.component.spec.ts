import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUSerComponent } from './all-user.component';

describe('AllUSerComponent', () => {
  let component: AllUSerComponent;
  let fixture: ComponentFixture<AllUSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUSerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
