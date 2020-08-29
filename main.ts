let letter = ""
let command = ""
let receivedString2 = ""
let name2 = ""
let value2 = 0
let radiogroup = 0
let receivedNumber2 = 0
let list = [1]
let num = false
let getdata = false
let gotdata = false
let env = "home"
radio.setGroup(radiogroup)
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
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
function new_command () {
    if (num) {
        serial.writeString("" + "\r\n\r\n" + control.deviceName() + " ~ % ")
    } else {
        serial.writeString("" + control.deviceName() + " ~ % ")
    }
}
function new_radio_command () {
    serial.writeString("" + "\r\n\r\n" + control.deviceName() + "/radio >> ")
}
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
serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    pause(100)
    switch (env) {
        case "home":
            num = true
            command = command.toLowerCase()
            switch (command) {
                case "help":
                    serial.writeString("\r\n" + 
                    "\r\nList of commands:" + 
                    "\r\nhelp - shows a list of commands" + 
                    "\r\ninfo - shows info about this device" + 
                    "\r\nreset - restarts the device" + 
                    "\r\necho - [message] - repeats your message - ex: 'echo Hello World!;'" + 
                    "\r\npin-read - [pinNumber] - shows the Analog and Digital values the pin has on the device - ex: 'pin-read 12;'" +
                    "\r\nradio - goes to the radio program, where you can use the radio functions")
                    break
                case "info":
                    serial.writeString("\r\n" + 
                    "\r\nShell Version: v1.0.0-alpha.4" + 
                    "\r\nRadio Group: " + radiogroup +
                    "\r\nDevice Name: " + control.deviceName() + 
                    "\r\nDevice Serial Number: " + control.deviceSerialNumber() + 
                    "\r\nTime Elapsed Since Boot: " + control.millis() / 1000 + " s" + 
                    "\r\nDevice Temperature: " + input.temperature() + "C, " + (input.temperature() * 1.8 + 32) + "F")
                    break
                case "reset":
                    serial.writeString("" + ("\r\n\r\nTHE MICRO:BIT WILL RESET DON'T TOUCH ANYTHING\r\n\r\n"))
                    control.reset()
                    break
                case "radio":
                    break
                 default:
                    if (command.includes("pin-read ")) {
                        let pin: string = command.replace("pin-read ", "")
                        serial.writeString("\r\n")
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
                    } else if (command.includes("echo ")) {
                        let message = command.replace("echo ", "")
                        serial.writeString("\r\n\r\n" + message)
                    } else {
                        serial.writeString("" + "\r\n\r\nError: command '" + command + "' not found!")
                    }
                    break
            }
            command = ""
            new_command()
            break
        case "radio":
            break
        case "pins":
            break
        case "leds":
            break
        case "sound":
            break
        case "overheat":
            break
    }
})