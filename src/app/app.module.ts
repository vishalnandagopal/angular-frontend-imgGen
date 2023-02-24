import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Imported modules for HTTP Communications 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PromptBuilderComponent } from './prompt-builder/prompt-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromptBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
