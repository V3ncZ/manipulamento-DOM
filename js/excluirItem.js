import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('lista-comprados');
const excluirItem = (elemento) => {
    let confirmacao = confirm('Tem certeza que deseja excluir o item?');
    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export { excluirItem }