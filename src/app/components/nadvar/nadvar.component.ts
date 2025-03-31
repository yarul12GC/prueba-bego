import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nadvar',
  standalone: true,
  imports: [],
  templateUrl: './nadvar.component.html',
  styleUrl: './nadvar.component.css'
})
export class NadvarComponent {
  @Output() filterChanged = new EventEmitter<string>();

  activeFilter: string = 'upcoming'; 

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filterChanged.emit(filter);
  }
}