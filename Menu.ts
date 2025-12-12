import prompt = require("readline-sync");
import process = require('node:process');
import { colors } from './src/util/Colors';
import { Mug } from "./src/models/Mug";
import { ProductController } from "./src/controller/ProductController";

export function main() {

    // Instância da Classe Controller
    let products: ProductController = new ProductController();

    // Variáveis auxiliares
    let option, id, price, weight, model, amount: number;
    let name: string;
    const modelTypes = ['Comum', 'Caneca 3D'];

    // Cadastrando canecas para testes
    let caneca1: Mug = new Mug(products.generateId(), "Caneca Star Wars", 70, 5, 3, 2);
    products.register(caneca1);

    let caneca2: Mug = new Mug(products.generateId(), "Caneca One Piece", 69.90, 10, 2, 1);
    products.register(caneca2);

    let caneca3: Mug = new Mug(products.generateId(), "Caneca Azul", 35.90, 7, 1, 1);
    products.register(caneca3);

    //Laço de repetição para o Menu
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
    console.log("7 - Vender Caneca");
    console.log("8 - Sair");
    
    console.log("\n*****************************************************", colors.reset);
    
    // Opção escolhida pelo usuário
    option = prompt.questionInt("Entre com a opcao desejada: ")

    // Case a opção digitada seja 8, irá finalizar o programa
    if(option == 8) {
        console.log(colors.fg.greenstrong, "\nLOJÃO DA CANECA - Encontre a caneca que você procura!");
        finish()
        console.log(colors.reset, "");
        process.exit()
    }
        switch(option){
            // Adicionar novo produto
            case 1:
                console.log(colors.fg.whitestrong,"\n\nAdicionar nova caneca\n\n", colors.reset);

                console.log("Digite o nome da caneca: ")
                name = prompt.question("")

                console.log("Digite o preço da caneca: ")
                price = prompt.questionFloat("");

                console.log("Digite a quantidade de canecas: ")
                amount = prompt.questionInt("");

                console.log("Digite o peso da caneca: ")
                weight = prompt.questionInt("");

                console.log("Digite o modelo da caneca: ")
                model = prompt.keyInSelect(modelTypes,  "", {cancel: false})+ 1;

                products.register(
                    new Mug(products.generateId(), name, price, amount, weight, model)
                )
                keyPress()
                break;

            // Consultar todos os produto
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as canecas\n", colors.reset);
                products.listAll();
                keyPress()
                break;

            // Consultar por ID
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar informações da caneca - por ID\n\n", colors.reset);
                console.log("Digite o ID da caneca: ");
                id = prompt.questionInt("");
                try{
                    products.searchById(id);

                } catch(error){
                    console.log((error as Error).message)
                }
                keyPress()
                break;

            // Atualizar produto por ID
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da caneca\n\n", colors.reset);

                console.log("Digite o ID da caneca: ");
                id = prompt.questionInt("");

                let product = products.searchInArray(id);

                if(product != null){
                    console.log("Digite o nome da caneca: ")
                    name = prompt.question("")

                    console.log("Digite o preço da caneca: ")
                    price = prompt.questionFloat("");

                    console.log("Digite a quantidade de canecas: ")
                    amount = prompt.questionInt("");

                    console.log("Digite o peso da caneca: ")
                    weight = prompt.questionInt("");

                    console.log("Digite o modelo da caneca: ")
                    model = prompt.keyInSelect(modelTypes,  "", {cancel: false})+ 1;
                   
                    products.update(
                        new Mug(id, name, price, amount, weight, model)
                    )
                   
                } else{
                    console.log(`${colors.fg.red} \nA caneca de ID: ${id} não foi encontrada! ${colors.reset}`);
                }
                keyPress()
                break;

            // Excluir produto por ID
            case 5:
                console.log(colors.fg.whitestrong,"\n\nExcluir uma caneca\n\n", colors.reset);
                console.log("Digite o ID da caneca: ");
                id = prompt.questionInt("");
                try{
                    products.delete(id);
                } catch(error){
                    console.log((error as Error).message);
                }
                keyPress()
                break;

            // Comprar Caneca
            case 6:
                console.log(colors.fg.whitestrong,"\n\nComprar caneca\n\n", colors.reset);
                console.log("Digite o id da caneca: ");
                id = prompt.questionInt("");

                console.log("Digite a quantidade que deseja comprar para loja: ");
                amount = prompt.questionFloat("");
                try{
                    products.by(id, amount);

                } catch(error){

                    console.log((error as Error).message);
                }
                keyPress()
                break;

            // Vender caneca
            case 7:
                console.log(colors.fg.whitestrong,"\n\nVender caneca\n\n", colors.reset);
                console.log("Digite o id da caneca: ");
                id = prompt.questionInt("");

                console.log("Digite a quantidade que deseja vender ao cliente: ");
                amount = prompt.questionFloat("");
                try{
                    products.sell(id, amount);

                } catch(error){
                    console.log((error as Error).message);
                }
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

// Função que mostra as informações do desenvolvedor assim que o programa é finalizado
export function finish(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Alberto Duran - Generation Brasil");
    console.log("github.com/AlbertoDuranFilho/estoque_canecas");
    console.log("*****************************************************");
}

// Função para pausar a execução até que o usuário pressione enter
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("Pressione enter para continuar...");
    prompt.prompt();
}

// Executa a função main
main();