/**
 * Variables globals
 */
// Funció per mostrar la llista d'ordres (opcional - per al botó A)
input.onButtonPressed(Button.A, function () {
    basic.showString("Ordre:")
    for (let valor of llista_ordre) {
        basic.showNumber(valor)
    }
})
// Quan es rep un missatge
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("Trobat")) {
        // Extrau el número del grup del missatge
        numero_grup = parseInt(receivedString.substr(5))
        if (!(isNaN(numero_grup))) {
            // Para l'emissió continua
            basic.clearScreen()
            // Afegeix el grup a la llista d'ordres
            llista_ordre.push(numero_grup)
            // Notifica a tothom qui ha trobat el tresor
            radio.sendString("Tresor trobat pel grup " + numero_grup)
            // Animació de celebració
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
            basic.showString("" + (numero_grup))
            basic.showIcon(IconNames.Asleep)
        }
    }
})
let numero_grup = 0
let llista_ordre: number[] = []
// Configuració inicial
radio.setGroup(7)
radio.setTransmitPower(1)
basic.showIcon(IconNames.House)
llista_ordre = []
// Bucle principal - emet el senyal "Cerca" contínuament
basic.forever(function () {
    radio.sendString("Cerca")
    basic.pause(500)
})
