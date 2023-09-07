import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/app/core/models/categorias.model';
import { Produtos } from 'src/app/core/models/produtos.model';
import { ToastService } from 'src/app/core/models/services/toast.service';
import { CategoriasService } from '../../categorias/categorias.service';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produtos = new Produtos();
  categorias:   Categorias[] = [];
  idprod: string = '';
  constructor(
    private toast: ToastService,
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.idprod = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Produto');
    if (this.idprod) {
      this.carregarProduto(this.idprod);
    }
    else {
      this.produtos.status = true;
     }
     this.loadCategories();
  }

  async loadCategories() {
    this.categorias = await this.categoriaService.getAll();
  }

  carregarProduto(id: string) {
    this.produtoService.getById(id)
      .then(obj => {
        this.produtos = obj;
      })
  }
  get editando() {
    return Boolean(this.produtos.id);
  }
  async onSubmit() {
    try {
     let result: Produtos; 
      if(this.idprod) {
        result =  await this.produtoService.update(this.idprod, this.produtos);
        this.toast.showSucess('Produto atualizado com sucesso');
      } else {
        result =  await this.produtoService.create(this.produtos);
        this.toast.showSucess('Produto cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar produto');

    }
  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Produto: ${this.produtos.descricao}`);
  }
}

