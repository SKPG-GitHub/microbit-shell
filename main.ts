serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    pause(100)
    command = command.toLowerCase()
    if (command == "help") {
        serial.writeString("" + "\r\nList of commands:" + 
        "\r\nhelp - shows a list of commands" + 
        "\r\ninfo - shows info about this device" + 
        "\r\nabout - shows info about the flashed program on this device" + 
        "\r\nreset - restarts the device" + 
        "\r\n")
    } else if (command == "info") {
        serial.writeString("" + "\r\nInfo about this device:" + 
        "\r\nDevice Name: " + control.deviceName() + 
        "\r\nDevice Serial Number: " + control.deviceSerialNumber() + 
        "\r\nTime Elapsed Since Boot: " + control.millis() / 1000 + " s" + 
        "\r\nShell Version: v1.0.1-alpha" + 
        "\r\nDevice Temperature: " + input.temperature() + "C, " + ((input.temperature() * 1.8) + 32) + "F")
    } else if (command == "about") {
        serial.writeString("" + "\r\nThis is a shell, made using the Makecode editor with Javascript." + 
        "\r\nAnd the thing is it runs on a micro:bit.")
    } else if (command == "reset") {
        serial.writeString("" + ("\r\nTHE MICRO:BIT WILL RESET DON'T TOUCH ANYTHING\r\n"))
        control.reset()
    } else if (command.includes("pinread ")) {
        let neww: string = command.replace("pinread ", "")
        switch (neww) {
            case "0":
                serial.writeString("\r\nVoltage on PIN0: " + pins.analogReadPin(AnalogPin.P0))
                break
            case "1":
                break
            case "2":
                break
            case "4":
                break
            case "5":
                break
            case "6":
                break
            case "7":
                break
            case "8":
                break
            case "9":
                break
            case "10":
                break
            case "11":
                break
            case "12":
                break
            case "13":
                break
            case "14":
                break
            case "15":
                break
            case "16":
                break
            case "17":
                break
            case "18":
                break
            case "19":
                break
            case "20":
                break
            default:
                serial.writeString("\r\nError: wrong pin number/index!")
        }
    } else if (command == "") {
            
    } else {
        serial.writeString("" + "\r\nError: command '" + command + "' not found!")
    }
    command = ""
    new_command()
})

function new_command () {
    if (num) {
        serial.writeString("" + "\r\n" + control.deviceName() + " ~ % ")
    } else {
        serial.writeString("" + control.deviceName() + " ~ % ")
    }
}

let letter = ""
let command = ""
let num = false
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
new_command()
num = true
basic.forever(function () {
    letter = serial.readString()
    serial.writeString(letter)
    if (letter == ";") {
        letter = ""
    } else {
        command = "" + command + letter
        letter = ""
    }
})