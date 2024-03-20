const campo_texto=document.querySelector("#texto-encriptado");
const campo_msg =document.querySelector("#campo-mensaje");
console.log(campo_texto)
console.log(campo_msg)

function btnEncriptar(){
    const textoEncriptado=encriptar(campo_texto.value)
    campo_msg.value=textoEncriptado
    campo_texto.value="";
}

function encriptar(stringEncriptado){
    let matriz_code=[
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ]
    stringEncriptado=stringEncriptado.toLowerCase();

    for(let i=0;i<matriz_code.length;i++){
        if(stringEncriptado.includes(matriz_code[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matriz_code[i][0],matriz_code[i][1]);
        }
    } 
    return stringEncriptado;
}

function btnDeseEncriptar(){
    const textoEncriptado=desencriptar(campo_texto.value)
    campo_msg.value=textoEncriptado
    campo_texto.value="";
}

function desencriptar(stringDesencriptado){
    let matriz_code=[
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ]
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for(let i=0;i<matriz_code.length;i++){
        if(stringDesencriptado.includes(matriz_code[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matriz_code[i][1],matriz_code[i][0]);
        }
    } 
    return stringDesencriptado;
}


function copiarTexto() {
    var texto = document.getElementById("#campo-mensaje");
    texto.focus();
    texto.setSelectionRange(0, texto.value.length); // Selecciona todo el texto
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + texto.value);
  }
