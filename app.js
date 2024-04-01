//selecionar algo no html (h1) 
//let titulo=document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';
//selecionado o p do html (p)
//let paragrafo= document.querySelector('p');
//paragrafo.innerHTML='Escolha um Numero entre 1 e 10';
//evite repetir codigos 
// função = responsavel por determinavel função-(function)
//Código omitido
//string = texto
//number= numero
//bolean= valor verdadeiro ou falço

let listaDeNumerosSosrteados=[];
let numeroLimite=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    ResponsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        //getElementById pegar pelo id // removeAtttibute remover atributo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
let quantidadeDeElementosNaLista=listaDeNumerosSosrteados.length;
 if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSosrteados=[];
 }
if (listaDeNumerosSosrteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio(); 
}else{
    listaDeNumerosSosrteados.push(numeroEscolhido);
    console.log(listaDeNumerosSosrteados)
    return numeroEscolhido;
}
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //setAttribute pegar um atributo e ativalo ou desativalo 
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







