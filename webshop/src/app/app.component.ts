import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  ola
    <router-outlet></router-outlet>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class AppComponent {
  title = 'webshop';
}
