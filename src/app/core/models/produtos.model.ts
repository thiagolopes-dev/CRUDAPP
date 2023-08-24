import { Categorias } from "./categorias.model";

export class Produtos {
    id?: number;
    descricao?: string;
    categoria = new Categorias();
}

