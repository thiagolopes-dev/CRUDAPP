import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroCategoriaComponent } from "./cadastro-categoria/cadastro-categoria.component";
import { ListaCategoriasComponent } from "./lista-categorias/lista-categorias.component";


const routes: Routes = [
    {
        path: '',
        component: ListaCategoriasComponent
    },
    {
        path: 'novo',
        component: CadastroCategoriaComponent
    },
    {
        path: ':id',
        component: CadastroCategoriaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  CategoriasRoutingModule { }