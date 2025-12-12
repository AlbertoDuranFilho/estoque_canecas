export abstract class Produto{

    //Atributos da classe Produto
    private _id: number;
    private _name: string;
    private _price: number;
    private _amount: number;

    constructor(id: number, name: string, price: number, amount: number){
        this._id = id;
        this._name = name;
        this._price = price;
        this._amount = amount;
    }

    // Get e Set do ID
    public get id(): number{
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }

    // Get e Set do nome
    public get name(): string{
        return this._name;
    }
    public set name(name: string){
        this._name = name;
    }

    // Get e Set do preço
    public get price(): number{
        return this._price;
    }
    public set price(price: number){
        this._price = price;
    }

    //Get e set da quantidade
    public get amount(): number{
        return this._amount;
    }
    public set amount(amount: number){
        this.amount = amount;
    }

    //Método para visualizar os produtos
    public view(): void{
        console.log(`\n\n****************************************************`);
        console.log(`Dados do Produto:`);
        console.log(`****************************************************`);
        console.log(`ID da produto: ${this._id}`);
        console.log(`Nome: ${this._name}`);
        console.log(`Preço: ${this._price.toFixed(2)}`);
        console.log(`Quantidade em estoque: ${this._amount}`);
    }
}