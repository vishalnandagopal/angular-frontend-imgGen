import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Imported modules for HTTP Communications 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PromptBuilderComponent } from './prompt-builder/prompt-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ChatFormComponent } from './chat-form/chat-form.component';


import { ClipboardModule } from 'ngx-clipboard';
import { ImageRendererComponent } from './image-renderer/image-renderer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromptBuilderComponent,
    FooterComponent,
    ChatFormComponent,
    ImageRendererComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
