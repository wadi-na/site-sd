let botao1 = document.getElementById("primeiro-botao");
let botao2 = document.getElementById("ultimo-botao");
let livro = document.getElementById("livro");

let pagina1 = document.getElementById("pagina1");
let pagina2 = document.getElementById("pagina2");
let pagina3 = document.getElementById("pagina3"); 
let pagina4 = document.getElementById("pagina4"); 

botao1.addEventListener("click", voltarPagina);
botao2.addEventListener("click", proximaPagina);

let posicaoAtual = 1;
let numeroDePaginas = 4; 
let posicaoMaxima = numeroDePaginas + 1;


function abrirLivro(){
    livro.style.transform="translateX(50%)";
    botao1.style.transform="translateX(-180px)"; 
    botao2.style.transform="translateX(180px)";
}

function fecharLivro(estaNoInicio){
    if(estaNoInicio){
        livro.style.transform = "translateX(0%)";
    } else{
        livro.style.transform = "translateX(100%)";
    }

    botao1.style.transform="translateX(0px)";
    botao2.style.transform="translateX(0px)";
}

function proximaPagina(){
    if (posicaoAtual < posicaoMaxima){
        switch(posicaoAtual){
            case 1: 
                abrirLivro(); 
                pagina1.classList.add("virada");
                pagina1.style.zIndex=1;
                break;
            case 2: 
                pagina2.classList.add("virada");
                pagina2.style.zIndex=2;
                break;
            case 3: 
                pagina3.classList.add("virada");
                pagina3.style.zIndex=3;
                break;
            case 4: 
                pagina4.classList.add("virada");
                pagina4.style.zIndex=4;
                fecharLivro();
                break;
            default:
                throw new Error("erro");
        }
        posicaoAtual++;
    }

}

function voltarPagina(){
    if(posicaoAtual>1){
        switch(posicaoAtual){
            case 2: 
                fecharLivro(true);
                pagina1.classList.remove("virada");
                pagina1.style.zIndex = 4;
                break;
            case 3:
                pagina2.classList.remove("virada");
                pagina2.style.zIndex=3;
                break;
            case 4: 
                pagina3.classList.remove("virada");
                pagina3.style.zIndex=2;
                break;
            case 5:
                abrirLivro();
                pagina4.classList.remove("virada");
                pagina4.style.zIndex=1;
                break;
            default:
                throw new Error("erro");
        }
        posicaoAtual --; 
    }

}