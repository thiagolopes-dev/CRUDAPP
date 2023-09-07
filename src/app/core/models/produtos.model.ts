import { Categorias } from "./categorias.model";

export class Produtos {
    id?: number;
    descricao?: string;
    preco?: number;
    status?: boolean;
    categoria = new Categorias();
}

