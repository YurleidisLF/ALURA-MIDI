function playSonido (idElementoAudio) {    /*  Finción para reproducir cualquir sonido. */
    document.querySelector(idElementoAudio).play();    // Estamos pasando un parametro un valor y no puede ir                                                    en comillas ni con el símbolo de #.
}

const listaDeTeclas =  document.querySelectorAll('.tecla');



for(let contador = 0; contador < listaDeTeclas.length; contador++ ) {
    const tecla = listaDeTeclas[contador];               // Es para no repetir el código varias veeces 
    const instrumentos = tecla.classList[1];

    const idAudio = `#sonido_${instrumentos}`;           
    console.log(idAudio)

    tecla.onclick = function(){                        // Esta es una función anónima
        playSonido(idAudio);
    } 

    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }



}

