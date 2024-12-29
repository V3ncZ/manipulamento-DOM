import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

// Declara uma variavel para o input
const item = document.getElementById('input-item');
// Declara uma variavel para a ul
const listaDeCompras = document.getElementById('lista-de-compras');

export function adicionarItem(evento) {
    evento.preventDefault();

    if (item.value === '') {
        alert('Por favor insira um item!');
        return;
    }

    const itemDaLista = criarItemDaLista(item.value);
    // Colocando a li dentro da ul
    listaDeCompras.appendChild(itemDaLista);

    verificarListaVazia(listaDeCompras);

    item.value = '';
}
