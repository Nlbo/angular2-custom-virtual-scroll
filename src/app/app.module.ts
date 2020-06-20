import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalVirtualScrollComponent } from './vertical-virtual-scroll/vertical-virtual-scroll.component';
import { HorizontalVirtualScrollComponent } from './horizontal-virtual-scroll/horizontal-virtual-scroll.component';
import { VerticalAndHorizontalVirtualScrollComponent } from './vertical-and-horizontal-virtual-scroll/vertical-and-horizontal-virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalVirtualScrollComponent,
    HorizontalVirtualScrollComponent,
    VerticalAndHorizontalVirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
