const textarea = document.querySelector (".textarea");
const mensagem = document.querySelector(".mensagem");

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function botaoencriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"] , ["i", "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}
 
function botaodesencriptar() {
    const textodesencriptado = desencriptar(textarea.value);
    mensagem.value = textodesencriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"] , ["i", "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function botaocopiar()  {
        const mensagem = document.querySelector('.mensagem');
        mensagem.select();
        mensagem.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(mensagem.value);
        alert('Opa! Seu texto foi copiado');
}

