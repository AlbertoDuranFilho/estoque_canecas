import { Produto } from "./Produto";

export class Caneca extends Produto{

    //Atributos da Classe Caneca
    private _weight: number;
    private _model: number;

    constructor(id: number, name: string, price: number, amount: number, weight: number, model: number){
        super(id, name, price, amount);
        this._weight = weight;
        this._model = model;
    }

    // Get e Set do peso
    public get weight(): number{
        return this._weight;
    }

    public set weight(weight: number){
        this._weight = weight;
    }

    // Get e Set do modelo
    public get model(): number{
        return this._model;
    }

    public set model(model: number){
        this._model = model;
    }

    //Método para adicionar a quantidade de canecas no estoque
    public addStock(amount: number): void{
        this.amount += amount;
    }

    //Método para remover a quantidade de canecas no estoque
    public removeStock(amount: number): boolean{
        if(this.amount < amount){
            console.log(`\nQuantidade no estoque insuficiente!`)
            return false;
        }

        this.amount = this.amount - amount;
        return true;
    }

    // Método para visualizar as informações da Caneca
    public view(): void {
        let model = "";
        
        switch(this._model){
            case 1:
                model = "Comum"
                break;
            case 2:
                model = "Caneca 3D"
                break;
        }

        super.view()
        console.log(`Peso da caneca: ${this._weight}kg`);
        console.log(`Modelo da caneca: ${model}`);
        
    }
    
}