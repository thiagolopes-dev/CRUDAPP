import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  // produtos: any[] = [];

  produtos = [
    {
      "id": 1,
      "descricao": 'X BacKteria',
      "categoria": 'lanche',
      "preco": 12345.85,
      "status": true
    },

    {
      "id": 2,
      "descricao": 'X Bacon',
      "categoria": 'lanche',
      "preco": 30,
      "status": false
    },

    {
      "id": 3,
      "descricao": 'X Frango',
      "categoria": 'lanche',
      "preco": 30,
      "status": true
    },

    {
      "id": 1,
      "descricao": 'X BacKteria',
      "categoria": 'lanche',
      "preco": 12345.85,
      "status": true
    },

    {
      "id": 2,
      "descricao": 'X Bacon',
      "categoria": 'lanche',
      "preco": 30,
      "status": false
    },

    {
      "id": 3,
      "descricao": 'X Frango',
      "categoria": 'lanche',
      "preco": 30,
      "status": true
    },



  ]


  constructor() { }

  ngOnInit() {
  }

}
