import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceAddComponent } from './annonce-add.component';

describe('AnnonceAddComponent', () => {
  let component: AnnonceAddComponent;
  let fixture: ComponentFixture<AnnonceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnonceAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
