import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
// import {PRODUTOS} from '../mock-produtos';
import { ProdutoService } from '../produto.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {


  selectedProduto?: Produto;

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  onSelect(produto: Produto): void{
    this.selectedProduto = produto;
    this.messageService.add(`ProdutosComponent: Produto ${produto.id} selecionado`); //teste para ver se não haverá erros
  }

  getProdutos(): void {
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }
}
