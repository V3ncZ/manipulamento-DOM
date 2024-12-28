// Declara uma variavel para o input
const item = document.getElementById('input-item');
// Declara uma variavel para o botão de salvar o item
const botaoSalvarItem = document.getElementById('botao-salvar-item');
// Declara uma variavel para a ul
const listaDeCompras = document.getElementById('lista-de-compras');

// Adiciona um evento ao botão de salvar
botaoSalvarItem.addEventListener('click', adicionarItem);

// Cria uma variavel para o contador
let contador = 0;

function adicionarItem(evento) {
    evento.preventDefault();

    // Cria um elemento li
    const itemDaLista = document.createElement('li');

    // Cria um elemento div
    const containerItemLista = document.createElement('div');

    // Atribui uma classe a div
    containerItemLista.classList.add('lista-item-container');

    // Cria um elemento div que segura o nome do item
    const containerNomeDoItem = document.createElement('div');;

    // Cria um elemento div que segura o checkbox
    const containerCheckbox = document.createElement('div');
    // Atribui uma classe a div que segura o checkbox
    containerCheckbox.classList.add('container-checkbox');

    // Cria um elemento input
    const checkboxInput = document.createElement('input');
    // Atribui um type ao input
    checkboxInput.type = 'checkbox';
    // Atribui uma classe ao input
    checkboxInput.classList.add('input-checkbox');
    // Atribui um id ao input
    checkboxInput.id = 'checkbox-' + contador++;

    // Cria um elemento label
    const checkboxLabel = document.createElement('label');
    // Identfica o checkbox que esta relacionado a label pelo id
    checkboxLabel.setAttribute('for', checkboxInput.id);

    // Criação de função anonima
    checkboxLabel.addEventListener('click', function (evento) {
        // Cria uma variável para o input
        const checkboxInput = evento.currentTarget.querySelector('.input-checkbox');
        // Cria uma variável para a checkbox customizada
        const checkboxCustomizado = evento.currentTarget.querySelector('.checkbox-customizado');

        // Coloca ou remove a classe 'checked' no input
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add('checked');
        } else {
            checkboxCustomizado.classList.remove('checked');
        }
    })

    // Cria um elemento div
    const checkboxCustomizado = document.createElement('div');
    // Atribui uma classe a div
    checkboxCustomizado.classList.add('checkbox-customizado');

    // Colocando a input dentro da label
    checkboxLabel.appendChild(checkboxInput);

    // Colocando a div dentro da label
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement('p');
    // Colocando o nome do item dentro do paragrafo
    nomeDoItem.innerText = item.value;

    const containerBotoes = document.createElement('div');
    const botaoExcluirItem = document.createElement('button');

    // Atribui uma classe a botão de excluir
    botaoExcluirItem.classList.add('item-lista-button');

    const imagemExcluirItem = document.createElement('img');
    imagemExcluirItem.src = 'img/delete.svg';
    imagemExcluirItem.alt = 'Excluir item';

    const botaoEditarItem = document.createElement('button');
    botaoEditarItem.classList.add('item-lista-button');

    const imagemEditarItem = document.createElement('img');
    imagemEditarItem.src = 'img/edit.svg';
    imagemEditarItem.alt = 'Editar item';


    // Colocando o p dentro da div
    containerNomeDoItem.appendChild(nomeDoItem);

    // Colocando a imagem dentro do botão de excluir e de editar
    botaoExcluirItem.appendChild(imagemExcluirItem);
    botaoEditarItem.appendChild(imagemEditarItem);

    // Colocando o botão de excluir dentro da div
    containerBotoes.appendChild(botaoExcluirItem);
    containerBotoes.appendChild(botaoEditarItem);

    // Colocando a div do nome dentro da div do item
    containerItemLista.appendChild(containerNomeDoItem);
    // Colocando a div dos botoes dentro da div do item
    containerItemLista.appendChild(containerBotoes);
    // Colocando a div dos itens dentro da li
    itemDaLista.appendChild(containerItemLista);
    // Colocando a li dentro da ul
    listaDeCompras.appendChild(itemDaLista);
}