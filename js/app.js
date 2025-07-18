

function comprar() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;


    if (tipoIngresso == 'pista') {

        document.getElementById('qtd-pista').innerHTML = calcularQuantidade(document.getElementById('qtd-pista').textContent);
        document.getElementById('qtd').value = '';

    }
    else if (tipoIngresso == 'superior') {

        document.getElementById('qtd-superior').innerHTML = calcularQuantidade(document.getElementById('qtd-superior').textContent);
        document.getElementById('qtd').value = '';

    }
    else {

        document.getElementById('qtd-inferior').innerHTML = calcularQuantidade(document.getElementById('qtd-inferior').textContent);
        document.getElementById('qtd').value = '';

    }

    function calcularQuantidade(qtdDisponivel) {

        let quantidade = document.getElementById('qtd').value;
        if (Number(quantidade) > 0) {

            if (Number(qtdDisponivel) >= Number(quantidade)) {
                alert('Compra realizada com sucesso !!!')
                return Number(qtdDisponivel) - Number(quantidade);
            }
            else {
                alert(`Não há ${quantidade} ingressos disponiveis`);
                return qtdDisponivel;
            }
        }
        else {
            alert(`É necessário informar um valor maior que 0 para continuar ! `)
        }

    }
    // informar a disponibilidade
}