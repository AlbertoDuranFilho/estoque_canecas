import prompt = require("readline-sync");
import process = require('node:process');
import { colors } from './src/util/Colors';
import { Caneca } from "./src/models/Caneca";

export function main() {

    let opcao: number;

    let caneca1: Caneca = new Caneca(1, "Caneca Star Wars", 70.00, 5, 3, 2); 
    caneca1.visualizar();
    caneca1.adicionarNoEstoque(5);
    caneca1.visualizar();
    caneca1.removerDoEstoque(20);
    caneca1.visualizar();
    caneca1.removerDoEstoque(3);
    caneca1.visualizar();

    while(true){
    console.log(colors.bg.black, colors.fg.yellow,"\n*****************************************************\n");
    
    console.log("***************** LOJÃO DA CANECA 🍵 ****************");
    
    console.log("\n*****************************************************\n");
    
    console.log("1 - Adicionar nova caneca");
    console.log("2 - Listar todas as canecas");
    console.log("3 - Buscar caneca por ID");
    console.log("4 - Atualizar informações da caneca");
    console.log("5 - Excluir Caneca");
    console.log("6 - Comprar Caneca");
    console.log("7 - Sair");
    
    console.log("\n*****************************************************", colors.reset);
    
    opcao = prompt.questionInt("Entre com a opcao desejada: ")

    if(opcao == 7) {
        console.log(colors.fg.greenstrong, "\nLOJÃO DA CANECA - Encontre a caneca que você procura!");
        finalizar()
        console.log(colors.reset, "");
        process.exit()
    }
        switch(opcao){
            // Adicionar novo produto
            case 1:
                console.log(colors.fg.whitestrong,"\n\nAdicionar nova caneca\n\n", colors.reset);
                keyPress()
                break;

            // Consultar todos os produto
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as canecas\n\n", colors.reset);
                keyPress()
                break;

            // Consultar por ID
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar informações da caneca - por ID\n\n", colors.reset);
                keyPress()
                break;

            // Atualizar produto por ID
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da caneca\n\n", colors.reset);

                keyPress()
                break;

            // Excluir produto por ID
            case 5:
                console.log(colors.fg.whitestrong,"\n\nExcluir uma caneca\n\n", colors.reset);
                keyPress()
                break;

            //Comprar Caneca
            case 6:
                console.log(colors.fg.whitestrong,"\n\nComprar caneca\n\n", colors.reset);
                keyPress()
                break;

            // Opção Inválida    
            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n", colors.reset);
                keyPress()
                break;
        }
    }

} 


export function finalizar(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Alberto Duran - Generation Brasil");
    console.log("github.com/AlbertoDuranFilho/estoque_canecas");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("Pressione enter para continuar...");
    prompt.prompt();
}

main();