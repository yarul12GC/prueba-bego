import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-details2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-details2.component.html',
  styleUrl: './card-details2.component.css'
})
export class CardDetails2Component {
  @Input() redulD2: any;
}
