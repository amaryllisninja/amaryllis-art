import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDesignComponent } from './character-design.component';

describe('CharacterDesignComponent', () => {
  let component: CharacterDesignComponent;
  let fixture: ComponentFixture<CharacterDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
