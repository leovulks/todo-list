//Encontra o input
const input = document.querySelector('#inputLista');

// Encontra a lista (ul)
const list = document.querySelector('#lista-de-tarefas');

//Função ao teclar ENTER
function addList(e) {
    if (e.key === 'Enter' && input.value !== '') {

        // Cria o elemento li na memoria
        const newLi = document.createElement('li');
        // Adiciona o conteudo do input no li
        newLi.textContent = input.value;

        // Adiciona os elementos na tela dentro do ul
        list.appendChild(newLi);

        input.value = '';
    }
}



// Reconhece a tecla solta e roda a funcao addList
input.addEventListener('keyup', addList)