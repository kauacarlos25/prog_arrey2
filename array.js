let valor_cidade = [] //variavel global 


function Inserir(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
}

function Excluir(){
    valor_cidade.pop()
    console.log(valor_cidade)
}