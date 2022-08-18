import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sophron';
  links = [
    { label: 'User', value: '/user' },
    { label: 'Table', value: '/table' },
    { label: 'Charts', value: '/charts' },
  ];
  activeLink = this.links[0];
}
