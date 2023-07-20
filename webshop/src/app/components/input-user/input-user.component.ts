import { Component } from '@angular/core';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styles: []
})
export class InputUserComponent {

  // fetch('https://api.themoviedb.org/3/movie/550?api_key=a11a3a1b7510b6fa1508f15d307460b6')

  addNumber() {
    fetch('https://api.themoviedb.org/3/movie/872585?api_key=a11a3a1b7510b6fa1508f15d307460b6')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
}
