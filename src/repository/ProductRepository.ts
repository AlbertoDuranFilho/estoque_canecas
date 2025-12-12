import { Product } from "../models/Product";

export interface ProductRepository{

    // CRUD do Produto
	searchById(id: number): void;
	listAll(): void;
	register(product: Product): void;
	update(product: Product): void;
	delete(id: number): void;

    // Método Específico
    by(id: number, amount: number): void
    sell(id: number, amount: number): void

}