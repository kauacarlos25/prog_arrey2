let valor_cidade = [] //variavel global 


function Inserir(){
    let cidade = document.getElementById('cidade')
    valor_cidade.push(cidade)
    console.log(cidade)
}

function Excluir(){
    valor_cidade.pop()
    console.log(cidade)
}