serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    pause(100)
    command = command.toLowerCase()
    if (command == "help") {
          serial.writeString("" + "\r\nList of commands:" + 
            "\r\nhelp - shows a list of commands" + 
            "\r\ninfo - shows info about this device")
        } else if (command == "info") {
            serial.writeString("\r\nInfo about this device:" + 
            "\r\nDevice Name: " + control.deviceName() + 
            "\r\nDevice Serial Number: " + control.deviceSerialNumber() + 
            "\r\nTime Elapsed Since Boot: " + (control.millis() / 1000) + " s")
        } else if (command == "about") {
            serial.writeString("This is a shell, made using the Makecode editor with Javascript and the thing is it runs on a micro:bit")
        } else {
            serial.writeString("" + serial.NEW_LINE + "Error: command '" + command + "' not found!")
        }
    command = ""
    new_command()
})

function new_command () {
    serial.writeString("\r\n" + control.deviceName() + " ~ % ")
}

let letter = ""
let command = ""
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeString("Welcome to the first micro:bit shell.")
serial.writeString("\r\nPress ';' to run the command. (Enter doesn't work)")
new_command()
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
