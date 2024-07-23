//Encontra o input
const input = document.querySelector('#inputLista');

// Encontra a lista (ul)
const list = document.querySelector('#lista-de-tarefas');

//Função ao teclar ENTER
function addList(e) {
    if (input.value !== '' & (e.key === 'Enter' || e.type === 'click')) {
        // Cria o elemento icone na memoria
        const removeIcon = document.createElement('img');
        removeIcon.src = 'trash.png'
        // Adiciona a classe no icone
        removeIcon.classList.add('remove-item');

        // Cria o elemento li na memoria
        const newLi = document.createElement('li');
        // Adiciona o conteudo do input no li
        newLi.textContent = input.value;

        // Adiciona os elementos na tela dentro do ul
        newLi.appendChild(removeIcon);
        list.appendChild(newLi);

        input.value = '';

        removeIcon.addEventListener('click', function () {
            list.removeChild(newLi);
        });
    }
}

// Evento de clique no botao
document.querySelector('#add').addEventListener('click', addList);

// Reconhece a tecla solta e roda a funcao addList
input.addEventListener('keyup', addList)
