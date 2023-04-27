const backup_content_screen = document.getElementById('content_screen').innerHTML;
//muda o innterHTML da div content_screen para seu estado inicial
function reset_innerHTML() {
    document.getElementById('content_screen').innerHTML = backup_content_screen;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//aqui usei this para pegar a div pai e querySelector para pegar o input
function exemplo_1(clicked) {
    const guarda_input = clicked.parentNode.querySelector('.input');
    //altera o todo o innerHTML da div com classe content_screen com o value do input
    document.getElementById('content_screen').innerHTML = guarda_input.value;
    //aqui o value do input é mudado para vazio
    guarda_input.value = "";
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//aqui usei this para pegar a div pai; querySelectorALL para pegar os inputs; e querySelector para acessar a div identificada por um id a ter seu innerHTML alterado
/* function exemplo_2(clicked) {
    //guarda_nodes vai conter uma nodeList
    const guarda_nodes = clicked.parentNode.querySelectorAll('.input');
    console.log(guarda_nodes);
    //guarda_inputs vai conter um array, a conversão da nodeList
    const guarda_inputs = Array.from(guarda_nodes);
    console.log(guarda_inputs);
    //altera o todo o innerHTML da div com classe content_screen com os values dos inputs guardados na guarda_inputs
    const alterar_div = document.querySelector('#content_screen');
    alterar_div.innerHTML = "";
    guarda_inputs.forEach( i => {
        alterar_div.innerHTML += `${i.value}<br>`;
        i.value = "";
    });
} */
//caso a nodeList não tivesse sido convertida para um array:
function exemplo_2(clicked) {
    const guarda_inputs = clicked.parentNode.querySelectorAll('.input');
    //guarda_inputs vai conter uma nodeList
    console.log(guarda_inputs);
    //fazer push do value de todos esses inputs numa array vazia
    const array_inputs = [];
    guarda_inputs.forEach( i => {array_inputs.push(i.value);});
    //altera o todo o innerHTML da div com classe content_screen com os values dos inputs guardados na array_inputs
    const alterar_div = document.querySelector('#content_screen');
    alterar_div.innerHTML = "";
    array_inputs.forEach( i => {
        alterar_div.innerHTML += `${i}<br>`;
    });
    guarda_inputs.forEach( i => {i.value = ""});
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//aqui usei this para pegar a div pai; getElementsByClassName para pegar os inputs; e getElementById para acessar a div identificada por um id a ter seu innerHTML alterado
function exemplo_3(clicked) {
    //guarda_htmlCollection vai conter um htmlCollection
    const guarda_htmlCollection = clicked.parentNode.getElementsByClassName('input');
    console.log(guarda_htmlCollection);
    //guarda_inputs vai conter um array, a conversão do htmlCollection
    const guarda_inputs = Array.from(guarda_htmlCollection);
    console.log(guarda_inputs);
    //altera o todo o innerHTML da div com classe content_screen com os values dos inputs guardados na guarda_inputs
    const alterar_div = document.getElementById('content_screen');
    alterar_div.innerHTML = "";
    guarda_inputs.forEach( i => {
        alterar_div.innerHTML += `${i.value}<br>`;
        i.value = "";
    });
}
/*Em resumo, a diferença principal entre NodeList e HTMLCollection é que a NodeList 
pode conter qualquer tipo de nó no documento, enquanto o HTMLCollection contém apenas 
elementos HTML. Além disso, o HTMLCollection é atualizado automaticamente em tempo real,
enquanto a NodeList é atualizada apenas quando você acessa seus elementos*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//aqui usei o this para utilizar o InnerText da tag
function exemplo_4(clicked) {
    const alterar_div = document.getElementById('content_screen');
    alterar_div.innerHTML = clicked.innerText;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//aqui usei o this para utilizar o textContent da tag
function exemplo_5(clicked) {
    const alterar_div = document.getElementById('content_screen');
    alterar_div.innerHTML = clicked.textContent;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//uso da propriedade createElement
function exemplo_6() {

    //crio uma div e guardo numa constante
    const nova_div = document.createElement('div');
    //crio um conteudo a ser inserido na div e guardo numa constante
    const innerHTML_da_div = document.createTextNode('Fui criado dinamicamente');
    //insiro o conteudo de texto na div
    nova_div.appendChild(innerHTML_da_div);

    //escolho e salvo numa constante qual tag quero usar como referencia para inserir a nova div criada
    const div_escolhida = document.querySelector('hr');
    //adiciono a div criada no DOM
    document.body.insertBefore(nova_div, div_escolhida);

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//aqui usei querySelectorAll para selecionar todos os inputs da página
function exemplo_7() {
    //guarda_nodes vai conter um nodeList
    const guarda_nodes = document.querySelectorAll('.input');
    console.log(guarda_nodes);
    //guarda_inputs vai conter um array, a conversão da nodeList
    const guarda_inputs = Array.from(guarda_nodes);
    console.log(guarda_inputs);
    //altera o todo o innerHTML da div com classe content_screen com os values dos inputs guardados na guarda_inputs
    const alterar_div = document.getElementById('content_screen');
    alterar_div.innerHTML = "";
    guarda_inputs.forEach( i => {
        alterar_div.innerHTML += `${i.value}<br>`;
        i.value = "";
    });
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//o objeto location é na verdade uma propriedade do objeto global window, assim como o document, que representa o documento HTML da página atual
//o mesmo fornece informações sobre a localização atual do documento, como a URL, o protocolo, o host, o caminho e as consultas de string.
//então na verdade, quando estavamos usando o objeto document para alterar o DOM, estavamos também sempre fazendo uso do objeto window, só não é necessario digita-lo no código 
function exemplo_8() {
    location.reload();
}

