

// Codigo del slider (Español/English)


// (ESP) Guardo en variables cada imagen

// (ENG) I save each imagen in vairables 



let img_presentacion =  document.querySelector(".img-presentation");
let img_uno =  document.querySelector(".img-naturaleza_1");
let img_dos =  document.querySelector(".img-naturaleza_2");
let img_tres =  document.querySelector(".img-naturaleza_3");
let img_cuatro =  document.querySelector(".img-naturaleza_4");


let inicio = 1;



// (ESP)

// Establezco la posicion de las imagenes, cuando digo el 100% ( el cien por ciento )
// Significa que va a transladarse el 100% a la derecha, es decir, el 100% seria el mismo ancho del contenedor

// (ENG)

// I set the position of the images. When I say 100% (one hundred percent), it means it will be translated 100% 
// to the right, that is, 100% would be the same width as the container.


img_presentacion.style.transform = "translateX(0%)";
img_uno.style.transform = "translateX(100%)";
img_dos.style.transform = "translateX(100%)";
img_tres.style.transform = "translateX(100%)";
img_cuatro.style.transform = "translateX(100%)";

setInterval( ()=> {

    let porcentaje = inicio * -100;


    // (ESP)

    // Cuando el porcentaje sea igual a -100%, muevo la imagen de presentacion a la izquierda y la oculto
    // Ademas, muestro la imagen nueva 'imagen_uno' y le coloco translateX(0%), porque 0% es la
    // posicion inicial ya que todas las imagenes tienen puesto un position absolute y su posicion inicial
    // seria el 0%, si se quiere mover a la izquierda seria -100%, o a la derecha 100% y asi

    // El porcentaje significa el tamaño de la imagen ya sea en ancho o alto, con translateX toma el porcentaje
    // como ancho o alto del elemento al que se le aplica la dicha propiedad y no como generalmente se ve
    // que es el porcentaje segun contenedor padre


    // (ENG)

    // When the percentage is equal to -100%, I move the presentation image to the left and hide it.
    // Additionally, I show the new image 'image_uno' and apply translateX(0%), because 0% is the
    // initial position since all images have a position set to absolute and their initial position
    // would be 0%. If you want to move it to the left, it would be -100%, or to the right 100%, and so on.

    // The percentage refers to the size of the image, either in width or height. With translateX, the percentage
    // is taken as the width or height of the element to which the property is applied and not as it is
    // generally seen
    // as the percentage according to the parent container.



    if(porcentaje == -100){

        img_presentacion.style.transform = "translateX(-50%)";
        img_presentacion.style.opacity = "0";

        img_uno.style.opacity = "1";
        img_uno.style.transform = "translateX(0%)";

        inicio++;
    }
    else if(porcentaje == -200){

        img_uno.style.transform = "translateX(-50%)";
        img_uno.style.opacity = "0";

        img_dos.style.opacity = "1";
        img_dos.style.transform = "translateX(0%)";

        inicio++;
    }
    else if(porcentaje == -300){
        img_dos.style.transform = "translateX(-50%)";
        img_dos.style.opacity = "0";

        img_tres.style.opacity = "1";
        img_tres.style.transform = "translateX(0%)"; 

        inicio++;
    }
    else if(porcentaje == -400){
        img_tres.style.transform = "translateX(-50%)";
        img_tres.style.opacity = "0";

        img_cuatro.style.opacity = "1";
        img_cuatro.style.transform = "translateX(0%)";


        inicio++;
    }

    //(ESP)

    // Cuando ya se hayan recorrido todas las imagenes se ejecutara esta condicion, haciendo que
    // se empiecen a recorrer las imagenes desde cero

    //(ENG)
    // When all images have been traversed, this condition will be executed, causing the images to be traversed /
    // from zero again.





    else if(porcentaje == -500){

        

        // (ESP) Coloco la imagen de presentacion en su posicion inicial

        // (ENG) I place the presentation image in its initial position.

        img_presentacion.style.opacity = "1";
        img_presentacion.style.transform = "translateX(0%)";

        // Devuelvo a su posicion inicial a cada imagen
        img_uno.style.transform = "translateX(100%)";
        img_dos.style.transform = "translateX(100%)";
        img_tres.style.transform = "translateX(100%)";
        img_cuatro.style.transform = "translateX(100%)";


        // (ESP) 'inicio' nuevamente valdra uno para que el bucle se mantenga repitiendose

        // (ENG) "The variable 'start' will be set to one again so the loop continues repeating."

        inicio = 1;
    }
    
}, 5000);

