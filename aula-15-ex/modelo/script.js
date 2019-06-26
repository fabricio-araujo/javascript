function contador() {
    let nUm = document.getElementById('valorum')
    let nDois = document.getElementById('valordois')
    let intervalo = document.getElementById('valortres')
    let resultado = document.getElementById('resultado')
    if(nUm.value.length == 0 || nDois.value.length == 0 || intervalo.value.length == 0) {
        window.alert('[ERRO]: Campos precisam ser diferentes de zero')
    }else {
        resultado.innerHTML = `contando`
        
    }
}