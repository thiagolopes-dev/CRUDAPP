import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/core/models/categorias.model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias: Categorias[] = [];
  constructor(
    private categService: CategoriasService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

  // carregarLista(){
  //   this.categService.getAll()
  //   .then(obj => {
  //     this.categorias = obj;
  //   });
  // }

  async carregarLista() {
    try {
      const obj = await this.categService.getAll();
      if (obj) {
        this.categorias = obj as Categorias[];
      }
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  }
  
}
