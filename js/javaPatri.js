const edad = prompt('dime tu edad y te digo algo random')

if (edad < 20) {
    prompt('eres un baby');
} else if (edad <= 35) {
    prompt('estás en la flor de la vida');
} else if (edad <= 40) {
    prompt('enhorabuena');
} else if (edad > 40) {
    prompt('viva la vida');
} else {
    prompt('escribe una edad valida');
}