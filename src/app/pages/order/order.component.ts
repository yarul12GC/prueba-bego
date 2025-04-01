import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NadvarComponent } from "../../components/nadvar/nadvar.component";
import { BuscadorComponent } from "../../components/buscador/buscador.component";
import { CardComponent } from "../../components/card/card.component";
import { Router, RouterLink } from '@angular/router';
import { UseServicePedidosService } from '../../services/use-service-pedidos.service';
import { BtndetailsComponent } from "../../components/btndetails/btndetails.component";

interface linkDetails {
  link: string,
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NadvarComponent, BuscadorComponent, CardComponent, HttpClientModule, CommonModule, BtndetailsComponent, FormsModule],  
  providers: [UseServicePedidosService],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']   
})
export default class OrderComponent implements OnInit {
  
  pedidos: any[] = []; 
  pedidosFiltrados: any[] = [];
  pedidosMostrados: any[] = [];
  filtroActual: string = 'all';
  terminoBusqueda: string = '';

  constructor(private pedidoService: UseServicePedidosService) {} 

  llenardata(): void {
    const pagesTypeStatus = ['upcoming', 'completed', 'past'];

    const allData: any[] = [];

    pagesTypeStatus.forEach((status) => {
      this.pedidoService.getDatos(status).subscribe(
        (response) => {
          const pedidosConEstado = response.result.map((pedido: any) => ({
            ...pedido,
            estado: status
          }));
          
          allData.push(...pedidosConEstado);
          this.pedidos = [...allData];
          this.filtrarPedidos(this.filtroActual);
          this.aplicarBusqueda();
        },
        (error) => {
          console.error('Error al obtener los datos:', error);
        }
      );
    });
  }

  actualizarFiltro(nuevoFiltro: string): void {
    this.filtroActual = nuevoFiltro;
    this.filtrarPedidos(nuevoFiltro);
    this.aplicarBusqueda();
  }

  filtrarPedidos(filtro: string): void {
    if (filtro === 'all') {
      this.pedidosFiltrados = [...this.pedidos];
    } else {
      this.pedidosFiltrados = this.pedidos.filter(pedido => pedido.estado === filtro);
    }
  }

  onSearchTermChanged(term: string): void {
    this.terminoBusqueda = term;
    this.aplicarBusqueda();
  }

  aplicarBusqueda(): void {
    if (!this.terminoBusqueda) {
      this.pedidosMostrados = [...this.pedidosFiltrados];
      return;
    }

    const term = this.terminoBusqueda.toLowerCase();
    this.pedidosMostrados = this.pedidosFiltrados.filter(pedido => 
      pedido.order_number.toString().toLowerCase().includes(term)
    );
  }

  ngOnInit(): void {
    this.llenardata();
  }

  linkDetalles: linkDetails[] = [
    {
      link: '/details',
    }
  ]
}