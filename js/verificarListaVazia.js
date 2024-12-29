const mensagemLista = document.getElementById('mensagem-lista-vazia');

// Função que verifica se a lista esta vazia
export function verificarListaVazia(lista) {
if (lista.childElementCount === 0) {
    mensagemLista.style.display = 'block';
} else {
    mensagemLista.style.display = 'none';
}
}