export function factoresCotizante(edad) {

    if (edad < 20){
        return 0.6
    } else if(edad < 25){
        return 0.9
    } else if(edad < 35){
        return 1
    } else if(edad < 45){
        return 1.3
    } else if(edad < 55){
        return 1.4
    } else if(edad < 65){
        return 2
    } else {
        return 2.4
    }

}

export function factoresCarga(edad) {

    if (edad < 2){
        return 0
    } else if(edad < 20){
        return 0.6
    } else if(edad < 25){
        return 0.7
    } else if(edad < 35){
        return 0.7
    } else if(edad < 45){
        return 0.9
    } else if(edad < 55){
        return 1
    } else if(edad < 65){
        return 1.4
    } else {
        return 2.2
    }

}