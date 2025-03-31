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
  imports: [NadvarComponent, BuscadorComponent, CardComponent, HttpClientModule, CommonModule, BtndetailsComponent],  
  providers: [UseServicePedidosService],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']   
})
export default class OrderComponent implements OnInit {
  pedidos: any[] = []; 
  filteredPedidos: any[] = [];
  currentFilter: string = 'upcoming';

  constructor(private pedidoService: UseServicePedidosService) {} 

  llenardata(): void {
    const pagesTypeStatus = ['upcoming', 'completed', 'past'];

    const allData: any[] = [];

    pagesTypeStatus.forEach((status) => {
      this.pedidoService.getDatos(status).subscribe(
        (response) => {
          const pedidosWithStatus = response.result.map((pedido: any) => ({
            ...pedido,
            statusType: status
          }));
          
          allData.push(...pedidosWithStatus);
          this.pedidos = [...allData];
          this.applyFilter(this.currentFilter);
        },
        (error) => {
          console.error('Error al obtener los datos:', error);
        }
      );
    });
  }

  applyFilter(filter: string) {
    this.currentFilter = filter;
    if (filter === 'all') {
      this.filteredPedidos = [...this.pedidos];
    } else {
      this.filteredPedidos = this.pedidos.filter(pedido => 
        pedido.statusType === filter
      );
    }
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