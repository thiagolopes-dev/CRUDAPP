import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";
import { ListaProdutosComponent } from "./lista-produtos/lista-produtos.component";

const routes: Routes = [
    {
        path: '',
        component: ListaProdutosComponent
    },
    {
        path: 'novo',
        component: CadastroProdutoComponent
    },
    {
        path: ':id',
        component: CadastroProdutoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutosRoutingModule { }