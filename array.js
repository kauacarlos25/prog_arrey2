let valor_cidade = [] //variavel global 
let res = document.getElementById('res')

function Inserir(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
    res.innerHTML += valor_cidade + "<br>"
}

function Excluir(){
    valor_cidade.pop()
    console.log(valor_cidade)
    res.innerHTML += valor_cidade + "<br>"
}