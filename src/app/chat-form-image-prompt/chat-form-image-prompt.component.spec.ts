import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormImagePromptComponent } from './chat-form-image-prompt.component';

describe('ChatFormImagePromptComponent', () => {
  let component: ChatFormImagePromptComponent;
  let fixture: ComponentFixture<ChatFormImagePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFormImagePromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFormImagePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
