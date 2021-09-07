//refenrenciar o input
let input= document.querySelector('input[name=tarefa]')
//referenciar o button
let btn = document.querySelector('#botao')
//referenciar a lista
let lista = document.querySelector('#lista')
//console.log(lista)
let tarefas =[
    "estudar python", "estudar JavaScript", "estudar java", "assistir séries","fazer jump"
]
function redenrizarTarefas(){
    for(tarefas of tarefas){
       //criar item da lista
       let itemLista =  document.createElement('li')

       //adicionar classes nos item da lista
       itemLista.setAttribute('class','list-group-item list-group-item-action' )

       //criar texto
       let itemTexto = document.createTextNode(tarefas);

       //adiciona o texto no item da lisa
       itemLista.appendChild(itemTexto)

       //adicionar o item da lista na lista
       lista.appendChild(itemLista)
       
    }
}

redenrizarTarefas()

