import { TestBed } from '@angular/core/testing';

import { UseServicePedidosService } from './use-service-pedidos.service';

describe('UseServicePedidosService', () => {
  let service: UseServicePedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseServicePedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
