import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterByCityPipe } from './filter-by-city.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilterByCityPipe],
  bootstrap: [AppComponent],
  exports: [FilterByCityPipe],
})
export class AppModule {}
