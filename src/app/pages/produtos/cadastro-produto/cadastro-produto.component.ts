import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/models/produtos.model';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto = new Produtos();
  status: boolean = true;
  constructor() {

  }

  ngOnInit() {
  }

  onSubmit() {

  }

}
