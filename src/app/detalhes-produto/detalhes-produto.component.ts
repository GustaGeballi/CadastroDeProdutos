import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  @Input() produto?: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
