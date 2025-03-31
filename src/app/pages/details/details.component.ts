import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UseServicePedidosService } from '../../services/use-service-pedidos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UseServicePedidosService],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export default class DetailsComponent implements OnInit {

  detalle: any;
  showDetails: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pedidosService: UseServicePedidosService
  ) { }

  ngOnInit(): void {
    const idorden = this.route.snapshot.paramMap.get('idorden');

    if (idorden) {
      this.pedidosService.getDetails(idorden).subscribe({
        next: (data) => {
          if (data && data.result) {
            this.detalle = data.result;
            console.log('Datos recibidos:', this.detalle);
          } else {
            console.error('No se encontraron datos para la orden:', idorden);
          }
        },
        error: (error) => {
          console.error('Error al obtener detalles:', error);
        }
      });
    } else {
      console.error('No se encontró el ID del pedido en la URL');
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  trackOrder(): void {
    if (this.detalle?.status >= 3) {
      console.log("Track Order");
      alert("Track Order activado");
    } else {
      alert("El pedido no está listo para ser rastreado.");
    }
  }

  formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  formatTime(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString('es-MX', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  goBack(): void {
    window.history.back();
  }
}
