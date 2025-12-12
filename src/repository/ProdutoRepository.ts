import { Produto } from "../models/Produto";

export interface ProdutoRepository{

    // CRUD do Produto
	procurarPorId(id: number): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(id: number): void;

    // Método Específico
    comprar(id: number, quantidade: number): void

}