import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Produto } from './produto';
import { PRODUTOS } from './mock-produtos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private messageService: MessageService) { }

  getProdutos(): Observable<Produto[]>{
    const produtos = of(PRODUTOS);
    this.messageService.add('ProdutoService: produtos encontrados');
    return produtos;
  }
}
