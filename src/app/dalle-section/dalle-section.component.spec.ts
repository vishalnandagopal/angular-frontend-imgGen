import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleSectionComponent } from './dalle-section.component';

describe('DalleSectionComponent', () => {
    let component: DalleSectionComponent;
    let fixture: ComponentFixture<DalleSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DalleSectionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DalleSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
