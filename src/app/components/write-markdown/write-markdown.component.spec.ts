import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteMarkdownComponent } from './write-markdown.component';

describe('WriteMarkdownComponent', () => {
  let component: WriteMarkdownComponent;
  let fixture: ComponentFixture<WriteMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteMarkdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
