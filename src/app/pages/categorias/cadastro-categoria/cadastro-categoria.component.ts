import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/core/models/categorias.model';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria = new Categorias();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    
  }

}
