function sorteio(){
    const inputMin = Math.ceil(document.querySelector('.inputMin').value);
    const inputMax = Math.floor(document.querySelector('.inputMax').value);

    const numeroSorteado = Math.floor(Math.random() * (inputMax - inputMin) + inputMin);
    alert(numeroSorteado);
    
}


