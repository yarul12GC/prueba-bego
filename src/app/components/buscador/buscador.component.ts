import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Output() searchChanged = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchChange(): void {
    this.searchChanged.emit(this.searchTerm.toLowerCase());
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchChanged.emit('');
  }
}