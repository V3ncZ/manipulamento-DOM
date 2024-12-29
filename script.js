import { adicionarItem } from "./js/adicionarItem.js";

// Declara uma variavel para o botão de salvar o item
const botaoSalvarItem = document.getElementById('botao-salvar-item');
// Adiciona um evento ao botão de salvar
botaoSalvarItem.addEventListener('click', adicionarItem);