serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function on_data_received() {
    
    pause(100)
    if (command == "help") {
        serial.writeString("" + serial.NEW_LINE + "List of commands:")
    } else if (command == "") {
        
    } else if (command == "") {
        
    } else {
        serial.writeString("" + serial.NEW_LINE + "Error: command '" + command + "' not found!")
    }
    
    command = ""
    new_command()
})
function new_command() {
    if (alive) {
        serial.writeString("" + serial.NEW_LINE + "" + control.deviceName() + " ~ % ")
    }
    
}

let letter = ""
let command = ""
let alive = false
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeString("Welcome to the first micro:bit shell.")
alive = true
new_command()
basic.forever(function on_forever() {
    
    if (alive) {
        letter = serial.readString()
        serial.writeString(letter)
        if (letter == ";") {
            letter = ""
        } else {
            command = "" + command + letter
            letter = ""
        }
        
    } else {
        
    }
    
})
