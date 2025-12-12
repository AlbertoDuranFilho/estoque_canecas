import { Product } from "../models/Product";
import { ProductRepository } from "../repository/ProductRepository";
import { colors } from "../util/Colors";

export class ProductController implements ProductRepository{

    // Atributo da Classe Controller
    private listProduct: Array<Product> = new Array<Product>();
    id: number = 0;

    // Procurar produto por id
    searchById(id: number): void {
        let searchProduct = this.searchInArray(id);

        if(searchProduct != null){
            searchProduct.view();
        } else{
            throw new Error(`${colors.fg.red} \nA caneca com id ${id} não encontrado. ${colors.reset}`);
        }
    }

    // Lista todos os produtos
    listAll(): void {
        this.listProduct.forEach((product) => {product.view()})
    }

    // Adicionar novo produto
    register(product: Product): void {
        this.listProduct.push(product);
        console.log(`${colors.fg.green} \nA Caneca de id: ${product.id} foi criada com sucesso! ${colors.reset}`)
    }

    //Atualizar as informaçcões do produto pelo id
    update(product: Product): void {
        let searchProduct = this.searchInArray(product.id)

        if(searchProduct != null){
            this.listProduct[this.listProduct.indexOf(searchProduct)] = product;
            console.log(`${colors.fg.green} \nA caneca de ID: ${product.id} foi atualizada com sucesso! ${colors.reset}`);
        
        } else{
           console.log(`${colors.fg.red} \nA caneca com id ${product.id} não encontrado. ${colors.reset}`);
        }
    }

    // Deletar produto pelo id
    delete(id: number): void {
        let searchProduct = this.searchInArray(id)

        if(searchProduct != null){
            this.listProduct.splice(this.listProduct.indexOf(searchProduct), 1)
            console.log(`${colors.fg.green} \nA caneca de ID: ${id} foi apagada com sucesso! ${colors.reset}`);
        
        } else{
            throw new Error(`${colors.fg.red} \nA caneca com id ${id} não encontrado. ${colors.reset}`);
        }
    }

    // Método para vender o produto (removendo do estoque)
    sell(id: number, amount: number): void {
        let product = this.searchInArray(id);

        if(product != null){
            if(product.removeStock(amount) == true) console.log(`${colors.fg.green} \nA venda da caneca de ID: ${id} foi efetuada com sucesso! ${colors.reset}`);

        }else{
            throw new Error(`${colors.fg.red} \nA caneca com id ${id} não encontrado. ${colors.reset}`);
        }
    }

    // Método para comprar o produto (Adicionar no estoque)
    by(id: number, amount: number): void {
         let conta = this.searchInArray(id);

        if(conta != null){
            conta.addStock(amount);
            console.log(`${colors.fg.green} \nA compra da caneca de ID: ${id} foi efetuada com sucesso! ${colors.reset}`);

        }else{
            throw new Error(`${colors.fg.red} \nA caneca com id ${id} não encontrado. ${colors.reset}`);
        }
    }

    // Função auxiliar para gerar id 
    public generateId(): number{
        return ++this.id;
    }

    // Procurar produto na Collection
    public searchInArray(id: number): Product | null{
        for (let product of this.listProduct){ if(product.id === id) return product;}
        return null;
    }
    
}