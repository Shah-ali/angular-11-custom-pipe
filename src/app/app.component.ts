import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  filterCity: string = '';
  items: any[] = [
    { name: 'Item 1', city: 'New York' },
    { name: 'Item 2', city: 'Los Angeles' },
    { name: 'Item 3', city: 'Chicago' },
    // Add more items with city data
  ];
}
