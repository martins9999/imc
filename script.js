const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');
const img = document.getElementById('img');

const text =(imc) =>{
    if(imc > 40 ) return 'Obesidade grau III';
    if(imc > 35 ) return 'Obesidade grau II';
    if(imc > 30 ) return 'Obesidade grau I';
    if(imc > 25 ) return 'Levemente acima do peso';
    if(imc > 18.5 ) return 'Peso Ideal';
    return 'Abaixo do peso';
}
const imagem =(vImc) =>{
        if(vImc > 40)
            img.classList.add('grau3');
        if(vImc > 35)
            img.classList.add('grau2');
        if(vImc > 30)
            img.classList.add('grau1');
        if(vImc > 25) {
            img.classList.add('acima');
        }
        if(vImc >= 18.5){
            img.classList.add('normal')
        }
        if(vImc < 18.5){
            img.classList.add('abaixo')
        }
}



const imcCalc = () =>{
    if(!nome.value)return resultado.textContent ='Digite seu nome';
    if(!altura.value)return resultado.textContent ='Digite sua altura';
    if(!peso.value)return resultado.textContent ='Digite seu peso';
   const valorImc =(peso.value / (altura.value * altura.value / 10000)).toFixed(1);
   resultado.innerText=`${nome.value} ${'-'} ${text(valorImc)} `;
   imagem(valorImc)
}