import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterByCityPipe } from './filter-by-city.pipe';
import { FileSizePipe } from './custom-filesize.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilterByCityPipe, FileSizePipe],
  bootstrap: [AppComponent],
  exports: [FilterByCityPipe, FileSizePipe],
})
export class AppModule {}
