import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/models/services/alert.service';
import { ToastService } from 'src/app/core/models/services/toast.service';
import { CategoriasService } from '../../categorias/categorias.service';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: any[] = [];
  constructor(
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

  carregarLista() {
    this.produtoService.getAll()
      .then(obj => {
        this.produtos = obj;
        console.log(obj);
      })
  }
  
  remove(produtos: any) {
    this.alert.showConfirmDelete(produtos.descricao, () => this.executeRemove(produtos));
  }

  executeRemove(categoria: any){
    try {
      const index = this.produtos.indexOf(categoria);
      this.produtos.splice(index, 1);
      this.produtoService.delete(categoria.id);

      this.toast.showSucess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }
}
