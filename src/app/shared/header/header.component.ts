import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  pageName: string = 'Home';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  setPageName(name: string): void {
    this.pageName = name;
  }
}
