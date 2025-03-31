import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
interface MenuItem {
  link: string;
}

@Component({
  selector: 'app-btn-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './btn-inicio.component.html',
  styleUrl: './btn-inicio.component.css'
})
export class NadvarComponent {
  menuItems: MenuItem[] = [
    {
      link: '/order',
    },
   
  ]
}