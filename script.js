

// Codigo del slider 



// Guardo en variables cada imagen
let img_presentacion =  document.querySelector(".img-presentation");
let img_uno =  document.querySelector(".img-naturaleza_1");
let img_dos =  document.querySelector(".img-naturaleza_2");
let img_tres =  document.querySelector(".img-naturaleza_3");
let img_cuatro =  document.querySelector(".img-naturaleza_4");


let inicio = 1;

// Establezco la posicion de las imagenes, cuando digo el 100% ( el cien por ciento )
// Significa que va a transladarse el 100% a la derecha, es decir, el 100% seria el mismo ancho del contenedor
img_presentacion.style.transform = "translateX(0%)";
img_uno.style.transform = "translateX(100%)";
img_dos.style.transform = "translateX(200%)";
img_tres.style.transform = "translateX(300%)";
img_cuatro.style.transform = "translateX(400%)";

setInterval( ()=> {

    let porcentaje = inicio * -100;

    // Cuando el porcentaje sea igual a -100%, muevo la imagen de presentacion a la izquierda y la oculto
    // Ademas, muestro la imagen nueva 'imagen_uno' y le coloco translateX(0%), porque 0% es la
    // posicion inicial ya que todas las imagenes tienen puesto un position absolute y su posicion inicial
    // seria el 0%, si se quiere mover a la izquierda seria -100%, o a la derecha 100% y asi

    // El porcentaje significa el tamaño de la imagen ya sea en ancho o alto, con translateX toma el porcentaje
    // como ancho o alto del elemento al que se le aplica la dicha propiedad y no como generalmente se ve
    // que es el porcentaje segun contenedor padre
    if(porcentaje == -100){

        img_presentacion.style.transform = "translateX(-100%)";
        img_presentacion.style.opacity = "0";

        img_uno.style.opacity = "1";
        img_uno.style.transform = "translateX(0%)";

        inicio++;
    }
    else if(porcentaje == -200){

        img_uno.style.transform = "translateX(-100%)";
        img_uno.style.opacity = "0";

        img_dos.style.opacity = "1";
        img_dos.style.transform = "translateX(0%)";

        inicio++;
    }
    else if(porcentaje == -300){
        img_dos.style.transform = "translateX(-100%)";
        img_dos.style.opacity = "0";

        img_tres.style.opacity = "1";
        img_tres.style.transform = "translateX(0%)"; 

        inicio++;
    }
    else if(porcentaje == -400){
        img_tres.style.transform = "translateX(-100%)";
        img_tres.style.opacity = "0";

        img_cuatro.style.opacity = "1";
        img_cuatro.style.transform = "translateX(0%)";


        inicio++;
    }
    // Cuando ya se hayan recorrido todas las imagenes se ejecutara esta condicion, haciendo que
    // se empiecen a recorrer las imagenes desde cero
    else if(porcentaje == -500){

        // Coloco la imagen de presentacion en su posicion inicial
        img_presentacion.style.opacity = "1";
        img_presentacion.style.transform = "translateX(0%)";

        // Devuelvo a su posicion inicial a cada imagen
        img_uno.style.transform = "translateX(100%)";
        img_dos.style.transform = "translateX(200%)";
        img_tres.style.transform = "translateX(300%)";
        img_cuatro.style.transform = "translateX(400%)";

        // 'inicio' nuevamente valdra uno para que el bucle se mantenga repitiendose
        inicio = 1;
    }
    
}, 5000);

