let numeroSecreto= 0;
let intentos = 0; 
let listaNumerosSorteados= [];
let numeroMaximo = 100;

function asignarTexto(elemento,texto){  //esta linea sirve para editar los encabezados y parrafos
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
        return;
}

//mandamos llamar a la funcion que dimos de alta en el html, llamandola como la pusimos
function verificarIntento(){
    let numeroUsuario = document.getElementById("valorUsuario").value;
    
//console.log(numeroSecreto);
//console.log(intentos);
    if (numeroUsuario == numeroSecreto){
        asignarTexto("p",`Purr..!, FELICIDADES eres muy buen@,  le atinaste en  ${intentos} ${(intentos ===1) ? `vez!!` : `veces!!`}`);
        document.getElementById(`juegoNuevo`).removeAttribute(`disabled`);
    }else {
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTexto("p","Upsis jejeje era michimenor..T_T");
        }
        else {
            asignarTexto("p","Miau que cerca *_*... es michimayor..!");
        }

        intentos++;
        limpiarcaja();
        
    }
    return;
}
function limpiarcaja(){ 
    document.getElementById("valorUsuario").value = ``;
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//estos logs son para checar que si esta guardando una lista de los numero que ya salieorn en los juegos previos
if (listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p',"Buuuu lo siento no lo conseguiste");
}   else{

//preguntar si ya pasaron todos los numeros 
    
     if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

        } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
    return numeroSecreto;
    
}

function condicionesIniciales(){
    asignarTexto(`h1`, `Maginumeros`);
    asignarTexto("p", `Hola soy Figa!!, te reto a adivinar el numero del dia, del 1 al ${numeroMaximo}`, "cual será ?");
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}


function reiniciarJuego(){
//limpiar caja 
limpiarcaja();
// mensajes, numero eh intentos nuevos
    condicionesIniciales();
//habilitar boton
document.querySelector(`#juegoNuevo`).setAttribute(`disabled`,`true`);
 }   
condicionesIniciales();


function intentoSaludo(){
    alert(" Holaaa..digo miauuu");
}

asignarTexto(`h1`, `Maginumeros`);
asignarTexto("p", `Hola soy Figa!!, te reto a adivinar el numero secreto, del 1 al ${numeroMaximo}`, "cual será?"); 
//asignamos el valor separado con una , y especificando si es h1 para titulo o bien p para parrafo
