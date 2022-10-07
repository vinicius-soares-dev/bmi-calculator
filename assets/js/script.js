const peso = document.querySelector('.inputPeso');
const altura = document.querySelector('.inputAltura');
const resposta = document.querySelector('.resposta');
const btn = document.querySelector('.btn');
const classificacaoImc = ['magreza', 'normal', 'sobrepeso', 'obesidade', 'obesidade grave'];


btn.addEventListener('click', (e) => {
    e.preventDefault();
    calculoImc();
});

function calculoImc() {
    // altura.value = altura.value / 100;
    const imc = peso.value / (altura.value * altura.value);

    if(imc < 18.5) {
        return resposta.innerHTML = `Seu imc é: <mark>${imc.toFixed(2)}</mark> classificação: <mark>${classificacaoImc[0]}</mark>`;
    } else if(imc >= 18.5 && imc <= 24.9) {
        return resposta.innerHTML = `Seu imc é: <mark>${imc.toFixed(2)}</mark> classificação: <mark>${classificacaoImc[1]}</mark>`;
    } else if(imc >= 25.0 && imc <= 29.9) {
        return resposta.innerHTML = `Seu imc é: <mark>${imc.toFixed(2)}</mark> classificação: <mark>${classificacaoImc[2]}</mark>`;
    } else if(imc >= 30.0 && imc <= 39.9) {
        return resposta.innerHTML = `Seu imc é: <mark>${imc.toFixed(2)}</mark> classificação: <mark>${classificacaoImc[3]}</mark>`;
    } else {
        return resposta.innerHTML = `Seu imc é: <mark>${imc.toFixed(2)}</mark> classificação: <mark>${classificacaoImc[4]}</mark>`;
    }

    
};  

