import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterByCityPipe } from './filter-by-city.pipe';
import { customFilesizePipe } from './custom-filesize.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilterByCityPipe, customFilesizePipe],
  bootstrap: [AppComponent],
  exports: [FilterByCityPipe, customFilesizePipe],
})
export class AppModule {}
