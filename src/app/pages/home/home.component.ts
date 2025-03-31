import { Component } from '@angular/core';
import { NadvarComponent } from "../../components/btn-inicio/btn-inicio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NadvarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
