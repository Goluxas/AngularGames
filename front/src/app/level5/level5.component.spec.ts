import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level5Component } from './level5.component';

describe('Level5Component', () => {
  let component: Level5Component;
  let fixture: ComponentFixture<Level5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Level5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Level5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
