serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    pause(100)
    command = command.toLowerCase()
    switch (command) {
        case "help":
            serial.writeString("" + 
            "\r\nList of commands:" + 
            "\r\nhelp - shows a list of commands" + 
            "\r\ninfo - shows info about this device" + 
            "\r\nabout - shows info about the flashed program on this device" + 
            "\r\nreset - restarts the device" + 
            "\r\npinread - [pinNumber] - shows the voltage the pin has on the device - ex: 'pinread 12;'" +
            "\r\ngetgroups - checks which radio groups send data (currently)")
            break
         case "info":
            serial.writeString("" + 
            "\r\nInfo about this device:" + 
            "\r\nDevice Name: " + control.deviceName() + 
            "\r\nDevice Serial Number: " + control.deviceSerialNumber() + 
            "\r\nTime Elapsed Since Boot: " + control.millis() / 1000 + " s" + 
            "\r\nShell Version: v1.0.0-alpha.3" + 
            "\r\nDevice Temperature: " + input.temperature() + "C, " + (input.temperature() * 1.8 + 32) + "F")
            break
        case "about":
            serial.writeString("" + "\r\nThis is a shell, made using the Makecode editor with Javascript." + 
            "\r\nAnd the thing is it runs on a micro:bit.")
            break
        case "reset":
            serial.writeString("" + ("\r\nTHE MICRO:BIT WILL RESET DON'T TOUCH ANYTHING\r\n"))
            control.reset()
            break
        case "getgroups":
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
            break
        default:
            if (command.includes("pinread ")) {
                let pin: string = command.replace("pinread ", "")
                switch (pin) {
                    case "0":
                        serial.writeString("\r\nVoltage on PIN0: " + pins.analogReadPin(AnalogPin.P0))
                        break
                    case "1":
                        serial.writeString("\r\nVoltage on PIN1: " + pins.analogReadPin(AnalogPin.P1))
                        break
                    case "2":
                        serial.writeString("\r\nVoltage on PIN2: " + pins.analogReadPin(AnalogPin.P2))
                        break
                    case "3":
                        serial.writeString("\r\nVoltage on PIN3: " + pins.analogReadPin(AnalogPin.P3))
                        break
                    case "4":
                        serial.writeString("\r\nVoltage on PIN4: " + pins.analogReadPin(AnalogPin.P4))
                        break
                    case "5":
                        serial.writeString("\r\nVoltage on PIN5: " + pins.analogReadPin(AnalogPin.P5))
                        break
                    case "6":
                        serial.writeString("\r\nVoltage on PIN6: " + pins.analogReadPin(AnalogPin.P6))
                        break
                    case "7":
                        serial.writeString("\r\nVoltage on PIN7: " + pins.analogReadPin(AnalogPin.P7))
                        break
                    case "8":
                        serial.writeString("\r\nVoltage on PIN8: " + pins.analogReadPin(AnalogPin.P8))
                        break
                    case "9":
                        serial.writeString("\r\nVoltage on PIN9: " + pins.analogReadPin(AnalogPin.P9))
                        break
                    case "10":
                        serial.writeString("\r\nVoltage on PIN10: " + pins.analogReadPin(AnalogPin.P10))
                        break
                    case "11":
                        serial.writeString("\r\nVoltage on PIN11: " + pins.analogReadPin(AnalogPin.P11))
                        break
                    case "12":
                        serial.writeString("\r\nVoltage on PIN12: " + pins.analogReadPin(AnalogPin.P12))
                        break
                    case "13":
                        serial.writeString("\r\nVoltage on PIN13: " + pins.analogReadPin(AnalogPin.P13))
                        break
                    case "14":
                        serial.writeString("\r\nVoltage on PIN14: " + pins.analogReadPin(AnalogPin.P14))
                        break
                    case "15":
                        serial.writeString("\r\nVoltage on PIN15: " + pins.analogReadPin(AnalogPin.P15))
                        break
                    case "16":
                        serial.writeString("\r\nVoltage on PIN16: " + pins.analogReadPin(AnalogPin.P16))
                        break
                    case "17":
                        serial.writeString("\r\nPIN17 is a 3V supply")
                        break
                    case "18":
                        serial.writeString("\r\nPIN18 is a 3V supply")
                        break
                    case "19":
                        serial.writeString("\r\nVoltage on PIN19: " + pins.analogReadPin(AnalogPin.P19))
                        break
                    case "20":
                        serial.writeString("\r\nVoltage on PIN20: " + pins.analogReadPin(AnalogPin.P20))
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
radio.setGroup(0)
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