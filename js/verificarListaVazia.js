const mensagemLista = document.getElementById('mensagem-lista-vazia');

// Função que verifica se a lista esta vazia
export function verificarListaVazia(lista) {
    console.log(lista);
if (lista.querySelectorAll('li').length === 0) {
    mensagemLista.style.display = 'block';
} else {
    mensagemLista.style.display = 'none';
}
}