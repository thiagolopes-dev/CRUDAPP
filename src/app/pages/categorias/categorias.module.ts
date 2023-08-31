import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CadastroCategoriaComponent } from "./cadastro-categoria/cadastro-categoria.component";
import { CategoriasRoutingModule } from "./categorias.routing";
import { ListaCategoriasComponent } from "./lista-categorias/lista-categorias.component";


@NgModule({

    declarations: [
        CadastroCategoriaComponent,
        ListaCategoriasComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        CategoriasRoutingModule
    ],
    exports: []

})
export class CategoriasModule { }