serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    pause(100)
    command = command.toLowerCase()
    if (command == "help") {
            serial.writeString("" + "\r\nList of commands:" + 
            "\r\nhelp - shows a list of commands" + 
            "\r\ninfo - shows info about this device" + 
            "\r\nabout - shows info about the flashed program on this device" + 
            "\r\nreset - restarts the device" + 
            "\r\ntempc - shows the temperature in Celsius" + 
            "\r\ntempf - shows the temperature in Fahrenheit")
        } else if (command == "info") {
            serial.writeString("" + "\r\nInfo about this device:" + 
            "\r\nDevice Name: " + control.deviceName() + 
            "\r\nDevice Serial Number: " + control.deviceSerialNumber() + 
            "\r\nTime Elapsed Since Boot: " + control.millis() / 1000 + " s")
        } else if (command == "about") {
            serial.writeString("" + "\r\nThis is a shell, made using the Makecode editor with Javascript." + 
            "\r\nAnd the thing is it runs on a micro:bit.")
        } else if (command == "reset") {
            serial.writeString("" + ("\r\nTHE MICRO:BIT WILL RESET DON'T TOUCH ANYTHING\r\n"))
            control.reset()
        } else if (command == "tempc") {
            serial.writeString("" + "\r\n" + input.temperature() + " C")
        } else if (command == "tempf") {
            serial.writeString("" + "\r\n" + (input.temperature() * 1.8 + 32) + " F")
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