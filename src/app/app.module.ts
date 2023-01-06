import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { Highlight, HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { GeneratorComponent } from './generator/generator.component';
import { LibraryComponent } from './library/library.component';



@NgModule({
  declarations: [AppComponent, GeneratorComponent, LibraryComponent,],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ClipboardModule,HighlightModule],
  providers: [],

bootstrap: [AppComponent],
})
export class AppModule {}
