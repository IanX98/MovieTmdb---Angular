import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  searchText = '';

  constructor(private router: Router) {}

  onSearchChange(text: string) {

    if (!text) return

    this.searchText = text
    console.log(this.searchText)

    this.router.navigate([''])
  }
}
