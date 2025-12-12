import { Produto } from "./Produto";

export class Caneca extends Produto{

    private _peso: number;
    private _modelo: number;

    constructor(id: number, nome: string, preco: number, quantidade: number, peso: number, modelo: number){
        super(id, nome, preco, quantidade);
        this._peso = peso;
        this._modelo = modelo;
    }

    // Get e Set do peso
    public get peso(): number{
        return this._peso;
    }

    public set peso(peso: number){
        this._peso = peso;
    }

    // Get e Set do modelo
    public get modelo(): number{
        return this._modelo;
    }

    public set modelo(modelo: number){
        this._modelo = modelo;
    }

    public adicionarNoEstoque(quantidade: number): void{
        this.quantidade += quantidade;
    }
    public removerDoEstoque(quantidade: number): boolean{
        if(this.quantidade < quantidade){
            console.log(`Quantidade no estoque insuficiente!`)
            return false;
        }

        this.quantidade = this.quantidade - quantidade;
        return true;
    }

    public visualizar(): void {
        let modelo = "";
        
        switch(this.modelo){
            case 1:
                modelo = "Comum"
                break;
                case 2:
                    modelo = "Caneca 3D"
                    break;
        }

        super.visualizar()
        console.log(`Peso da caneca: ${this._peso}kg`);
        console.log(`Modelo da caneca: ${modelo}`);

        
    }
    
}