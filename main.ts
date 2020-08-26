serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
let command = ""
serial.writeLine("Welcome to the first micro:bit shell.")
serial.writeString("" + control.deviceName() + " ~ % ")
serial.writeString(serial.readString())
basic.forever(function () {
    
})
