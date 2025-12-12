import { Produto } from "../models/Produto";

export interface ProdutoRepository{

    // CRUD do Produto
	searchById(id: number): void;
	listAll(): void;
	register(product: Produto): void;
	update(product: Produto): void;
	delete(id: number): void;

    // Método Específico
    by(id: number, amount: number): void

}