import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoesListComponent } from './photoes-list.component';

describe('PhotoesListComponent', () => {
  let component: PhotoesListComponent;
  let fixture: ComponentFixture<PhotoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
