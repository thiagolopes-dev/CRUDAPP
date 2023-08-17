import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";
import { ListaProdutosComponent } from "./lista-produtos/lista-produtos.component";
import { ProdutosRoutingModule } from "./produtos.routing";

@NgModule({

    declarations: [
        CadastroProdutoComponent,
        ListaProdutosComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ProdutosRoutingModule
    ],
    exports: []

})
export class ProdutosModule { }