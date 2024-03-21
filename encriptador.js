
let ingresoTexto = document.getElementById("ingresoTexto");
let botonEncriptar = document.getElementById("botonEncriptar");
let botonDesencriptar = document.getElementById("botonDesencriptar");
let botonCopiar = document.getElementById("botonCopiar");
let mensaje = document.getElementById("mensaje");
let muneco = document.getElementById("muneco");
let informacion = document.getElementById("informacion");
let encriptador = document.getElementById("encriptador");

let textoCifrado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

let reemplazar =(nuevoValor) =>{
    mensaje.innerHTML = nuevoValor;

    muneco.classList.add("oculto");
    ingresoTexto.value= "";
    informacion.style.display = "none";
    botonCopiar.style.display = "block";
    encriptador.classList.add ("ajustar");
    mensaje.classList.add("ajustar");

}

let reset = () =>{
    mensaje.innerHTML = "";

    muneco.classList.remove("oculto");
    informacion.style.display = "block";
    botonCopiar.style.display = "none";

    encriptador.classList.remove ("ajustar");
    mensaje.classList.remove("ajustar");
    ingresoTexto.focus();

}
                        
botonEncriptar.addEventListener("click",() => {
    let texto = ingresoTexto.value.toLowerCase();

    if(texto != ""){
    function encriptar(newText){
        for(let i = 0; i < textoCifrado.length; i++){
            if(newText.includes(textoCifrado[i][0])){
                newText = newText.replaceAll(textoCifrado[i][0], textoCifrado[i][1]);
            };    
        };
        return newText
    }
    } else{
        alert("Ingrese texto a encriptar")
        reset();
    }
    reemplazar(encriptar(texto));
});

botonDesencriptar.addEventListener("click",() => {
    let texto = ingresoTexto.value.toLowerCase();

    if(texto != ""){
    function desencriptar(newText){
        for(let i = 0; i < textoCifrado.length; i++){
            if(newText.includes(textoCifrado[i][1])){
                newText = newText.replaceAll(textoCifrado[i][1], textoCifrado[i][0]);   
            };
        };
        return newText;   
    }
    
} else {
    alert("Ingrese texto a desencriptar")
    reset();
}
    
    reemplazar(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
    let texto = mensaje;
    texto.select();
    document.execCommand('copy')
    alert("Texto copiado");

    reset();
});