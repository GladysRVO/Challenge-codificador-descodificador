const texto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function botonCodificar() {
    const textoCodificado = codificar(texto.value);
    mensaje.value = textoCodificado;
    texto.value = "";
}

function botonDescodificar() {
    const mensajeDescodificado = descodificar (mensaje.value);
    texto.value = mensajeDescodificado;
    mensaje.value = ""; 

}

function codificar (stringCondificada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCondificada = stringCondificada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCondificada.includes(matrizCodigo[i][0])) {
            stringCondificada = stringCondificada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringCondificada;
}

function descodificar (stringDescondificada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDescondificada = stringDescondificada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescondificada.includes(matrizCodigo[i][0])) {
            stringDescondificada = stringDescondificada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    
    return stringDescondificada;
}

document.getElementById('copiar');
async function copiarContenido() {
    let text = document.querySelector("#copiar").value;
    await navigator.clipboard.writeText(mensaje);
    alert("mensaje copiado")
}