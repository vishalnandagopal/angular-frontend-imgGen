import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imported modules for HTTP Communications

// Import components
import { HomeComponent } from './home/home.component';
import { ImageGenComponent } from './image-gen/image-gen.component';
import { FooterComponent } from './footer/footer.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { DalleSectionComponent } from './dalle-section/dalle-section.component';

import { ClipboardModule } from 'ngx-clipboard';
import { ChatFormImagePromptComponent } from './chat-form-image-prompt/chat-form-image-prompt.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ImageGenComponent,
        FooterComponent,
        ChatFormComponent,
        DalleSectionComponent,
        ChatFormImagePromptComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ClipboardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
