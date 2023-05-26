import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGenComponent } from './image-gen.component';

describe('PromptBuilderComponent', () => {
    let component: ImageGenComponent;
    let fixture: ComponentFixture<ImageGenComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ImageGenComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ImageGenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
