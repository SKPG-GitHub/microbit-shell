serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    pause(100)
    command = command.toLowerCase()
    switch (command) {
        case "help":
            serial.writeString("" + 
            "\r\nList of commands:" + 
            "\r\nhelp - shows a list of commands" + 
            "\r\ninfo - shows info about this device" + 
            "\r\nreset - restarts the device" + 
            "\r\npin-read - [pinNumber] - shows the Analog and Digital values the pin has on the device - ex: 'pin-read 12;'" +
            "\r\nscan-groups - checks which radio groups send data (currently)")
            break
         case "info":
            serial.writeString("" + 
            "\r\nShell Version: v1.0.0-alpha.4" + 
            "\r\nRadio Group: " + radiogroup +
            "\r\nDevice Name: " + control.deviceName() + 
            "\r\nDevice Serial Number: " + control.deviceSerialNumber() + 
            "\r\nTime Elapsed Since Boot: " + control.millis() / 1000 + " s" + 
            "\r\nDevice Temperature: " + input.temperature() + "C, " + (input.temperature() * 1.8 + 32) + "F")
            break
        case "reset":
            serial.writeString("" + ("\r\nTHE MICRO:BIT WILL RESET DON'T TOUCH ANYTHING\r\n"))
            control.reset()
            break
        case "scan-groups":
            serial.writeLine("\r\nStarting radio group checking...")
            pause(3000)
            serial.writeString("This test will go through groups 0 - 255")
            serial.writeLine("\r\nThis test will take 10-15 minutes (some types of data could be empty)")
            pause(2000)
            for (let i: number = 0; i <= 255; i++) {
                radio.setGroup(i)
                getdata = true
                pause(3000)
                if (gotdata) {
                    getdata = false
                    gotdata = false
                    list.push(i)
                    serial.writeLine("Got Data On Group: " + i + 
                    " Data in packets: String=" + receivedString2 + 
                    " Number=" + receivedNumber2 + " Variable.Name=" + name2 + " Variable.Value=" + value2)
                } else {
                    serial.writeLine("Tested Group: " + i + " No Data")
                }
                receivedString2 = ""
                receivedNumber2 = 0
                name2 = ""
                value2 = 0
            }
            serial.writeString("All groups that sent data: ")
            for (let i: number = 1; i < list.length + 1; i++) {
                serial.writeString(list.get(i).toString() + ", ")
            }
            radiogroup = 0
            break
        default:
            if (command.includes("pin-read ")) {
                let pin: string = command.replace("pin-read ", "")
                switch (pin) {
                    case "0":
                        serial.writeString("\r\nAnalog / Digital Value on PIN0: " + pins.analogReadPin(AnalogPin.P0) + " / " + pins.digitalReadPin(DigitalPin.P0))
                        break
                    case "1":
                        serial.writeString("\r\nAnalog / Digital Value on PIN1: " + pins.analogReadPin(AnalogPin.P1) + " / " + pins.digitalReadPin(DigitalPin.P1))
                        break
                    case "2":
                        serial.writeString("\r\nAnalog / Digital Value on PIN2: " + pins.analogReadPin(AnalogPin.P2) + " / " + pins.digitalReadPin(DigitalPin.P2))
                        break
                    case "3":
                        serial.writeString("\r\nAnalog / Digital Value on PIN3: " + pins.analogReadPin(AnalogPin.P3) + " / " + pins.digitalReadPin(DigitalPin.P3))
                        break
                    case "4":
                        serial.writeString("\r\nAnalog / Digital Value on PIN4: " + pins.analogReadPin(AnalogPin.P4) + " / " + pins.digitalReadPin(DigitalPin.P4))
                        break
                    case "5":
                        serial.writeString("\r\nAnalog / Digital Value on PIN5: " + pins.analogReadPin(AnalogPin.P5) + " / " + pins.digitalReadPin(DigitalPin.P5))
                        break
                    case "6":
                        serial.writeString("\r\nAnalog / Digital Value on PIN6: " + pins.analogReadPin(AnalogPin.P6) + " / " + pins.digitalReadPin(DigitalPin.P6))
                        break
                    case "7":
                        serial.writeString("\r\nAnalog / Digital Value on PIN7: " + pins.analogReadPin(AnalogPin.P7) + " / " + pins.digitalReadPin(DigitalPin.P7))
                        break
                    case "8":
                        serial.writeString("\r\nAnalog / Digital Value on PIN8: " + pins.analogReadPin(AnalogPin.P8) + " / " + pins.digitalReadPin(DigitalPin.P8))
                        break
                    case "9":
                        serial.writeString("\r\nAnalog / Digital Value on PIN9: " + pins.analogReadPin(AnalogPin.P9) + " / " + pins.digitalReadPin(DigitalPin.P9))
                        break
                    case "10":
                        serial.writeString("\r\nAnalog / Digital Value on PIN10: " + pins.analogReadPin(AnalogPin.P10) + " / " + pins.digitalReadPin(DigitalPin.P10))
                        break
                    case "11":
                        serial.writeString("\r\nAnalog / Digital Value on PIN11: " + pins.analogReadPin(AnalogPin.P11) + " / " + pins.digitalReadPin(DigitalPin.P11))
                        break
                    case "12":
                        serial.writeString("\r\nAnalog / Digital Value on PIN12: " + pins.analogReadPin(AnalogPin.P12) + " / " + pins.digitalReadPin(DigitalPin.P12))
                        break
                    case "13":
                        serial.writeString("\r\nAnalog / Digital Value on PIN13: " + pins.analogReadPin(AnalogPin.P13) + " / " + pins.digitalReadPin(DigitalPin.P13))
                        break
                    case "14":
                        serial.writeString("\r\nAnalog / Digital Value on PIN14: " + pins.analogReadPin(AnalogPin.P14) + " / " + pins.digitalReadPin(DigitalPin.P14))
                        break
                    case "15":
                        serial.writeString("\r\nAnalog / Digital Value on PIN15: " + pins.analogReadPin(AnalogPin.P15) + " / " + pins.digitalReadPin(DigitalPin.P15))
                        break
                    case "16":
                        serial.writeString("\r\nAnalog / Digital Value on PIN16: " + pins.analogReadPin(AnalogPin.P16) + " / " + pins.digitalReadPin(DigitalPin.P16))
                        break
                    case "17":
                        serial.writeString("\r\nPIN17 is a 3V supply")
                        break
                    case "18":
                        serial.writeString("\r\nPIN18 is a 3V supply")
                        break
                    case "19":
                        serial.writeString("\r\nAnalog / Digital Value on PIN19: " + pins.analogReadPin(AnalogPin.P19) + " / " + pins.digitalReadPin(DigitalPin.P19))
                        break
                    case "20":
                        serial.writeString("\r\nAnalog / Digital Value on PIN20: " + pins.analogReadPin(AnalogPin.P20) + " / " + pins.digitalReadPin(DigitalPin.P20))
                        break
                    default:
                        serial.writeString("\r\nError: wrong pin number/index!")
                        break
                }
            } else {
                serial.writeString("" + "\r\nError: command '" + command + "' not found!")
            }
            break
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
let num = false
let list = [1]
let command = ""
let getdata = false
let gotdata = false
let receivedString2: string = ""
let receivedNumber2: number = 0
let name2: string = ""
let value2: number = 0
let radiogroup = 0
radio.setGroup(radiogroup)
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
radio.onReceivedString(function (receivedString: string) {
    if (getdata) {
        gotdata = true
        receivedString2 = receivedString
    } else {

    }
})
radio.onReceivedValue(function (name: string, value: number) {
    if (getdata) {
        gotdata = true
        name2 = name
        value2 = value
    } else {

    }
})
radio.onReceivedNumber(function (receivedNumber: number) {
    if (getdata) {
        gotdata = true
        receivedNumber2 = receivedNumber
    } else {

    }
})