input.onButtonPressed(Button.A, function () {
    basic.showString("Ordre:")
    for (let valor of llista_ordre) {
        basic.showNumber(valor)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("Trobat")) {
        numero_grup = parseInt(receivedString.substr(5))
        if (!(isNaN(numero_grup))) {
            basic.clearScreen()
            llista_ordre.push(numero_grup)
            radio.sendString("Tresor trobat pel grup " + numero_grup)
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
            basic.showString("" + (numero_grup))
            basic.showIcon(IconNames.Asleep)
        }
    }
})
let numero_grup = 0
let llista_ordre: number[] = []
let receivedString = ""
radio.setGroup(7)
radio.setTransmitPower(1)
basic.showIcon(IconNames.House)
llista_ordre = []
basic.forever(function () {
    radio.sendString("Cerca")
    basic.pause(500)
})
