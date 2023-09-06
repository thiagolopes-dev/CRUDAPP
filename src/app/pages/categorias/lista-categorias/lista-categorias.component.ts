import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/models/services/alert.service';
import { ToastService } from 'src/app/core/models/services/toast.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias: any[] = [];
  constructor(
    private categService: CategoriasService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

  carregarLista() {
    this.categService.getAll()
      .then(obj => {
        this.categorias = obj;
      })
  }

  remove(categorias: any) {
    this.alert.showConfirmDelete(categorias.descricao, () => this.executeRemove(categorias));
  }

  executeRemove(categoria: any){
    try {
      const index = this.categorias.indexOf(categoria);
      this.categorias.splice(index, 1);
      this.categService.delete(categoria.id);

      this.toast.showSucess('Categoria removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o categoria');
    }
  }
  
}
