export abstract class Produto{
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _quantidade: number;

    constructor(id: number, nome: string, preco: number, quantidade: number){
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    // Get e Set do ID
    public get id(): number{
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }

    // Get e Set do nome
    public get nome(): string{
        return this._nome;
    }
    public set nome(nome: string){
        this._nome = nome;
    }

    // Get e Set do preço
    public get preco(): number{
        return this._preco;
    }
    public set preco(preco: number){
        this._preco = preco;
    }

    //Get e set da quantidade
    public get quantidade(): number{
        return this._quantidade;
    }
    public set quantidade(quantidade: number){
        this._quantidade = quantidade;
    }

    //Método Específico
    public visualizar(): void{
        console.log(`\n\n****************************************************`);
       console.log(`Dados do Produto:`)
       console.log(`****************************************************`);
       console.log(`ID da produto: ${this._id}`)
       console.log(`Nome: ${this.nome}`)
       console.log(`Preço: ${this._preco.toFixed(2)}`)
       console.log(`Quantidade em estoque: ${this._quantidade}`)
    }
}