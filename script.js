function calcular() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.document.alert('Erro! Os dados devem ser inseridos corretamente')
    } else { // no caso de dar certo 
        resultado.innerHTML = 'Contando: '

        let num1 = Number(inicio.value)
        let num2 = Number(fim.value)
        let pulo = Number(passo.value)

        if (num1 < num2) {
            for (let i = num1; i <= num2; i += pulo) {
                resultado.innerHTML += ` ${i} `
            }
        } else {
            for (let i = num1; i >= num2; i -= pulo) {
                resultado.innerHTML += ` ${i} `
            }
        }
    }    
}