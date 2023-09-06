import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/app/core/models/categorias.model';
import { ToastService } from 'src/app/core/models/services/toast.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categorias = new Categorias();
  idcateg: string = '';
  constructor(
    private toast: ToastService,
    private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.idcateg = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Categoria');
    if (this.idcateg) {
      this.carregarCategoria(this.idcateg);
    }
    else {
      this.categorias.status = true;
     }
  }
  carregarCategoria(id: string) {
    this.categoriaService.getById(id)
      .then(obj => {
        this.categorias = obj;
      })
  }
  get editando() {
    return Boolean(this.categorias.id);
  }
  async onSubmit() {
    try {
     let result: Categorias; 
      if(this.idcateg) {
        result =  await this.categoriaService.update(this.idcateg, this.categorias);
        this.toast.showSucess('Categoria atualizado com sucesso');
      } else {
        result =  await this.categoriaService.create(this.categorias);
        this.toast.showSucess('Categoria cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar categoria');

    }
  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Categoria: ${this.categorias.descricao}`);
  }
}

