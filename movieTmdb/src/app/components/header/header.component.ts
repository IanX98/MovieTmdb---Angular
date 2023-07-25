import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  searchText = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSearchChange(text: string) {

    if (!text) return

    this.searchText = text
    
    this.apiService.setQueryText(text);
    
    this.router.navigate([`/search/${text}`])
    this.searchText = ''
  }
}
