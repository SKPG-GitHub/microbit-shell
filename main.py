def on_data_received():
    global command
    pause(100)
    if command == "help":
        serial.write_string("" + serial.NEW_LINE + "List of commands:")
    elif command == "":
        pass
    elif command == "":
        pass
    else:
        serial.write_string("" + serial.NEW_LINE + "Error: command '" + command + "' not found!")
    command = ""
    new_command()
serial.on_data_received(serial.delimiters(Delimiters.SEMI_COLON), on_data_received)

def new_command():
    if alive:
        serial.write_string("" + serial.NEW_LINE + "" + control.device_name() + " ~ % ")
letter = ""
command = ""
alive = False
serial.redirect_to_usb()
serial.set_baud_rate(BaudRate.BAUD_RATE115200)
serial.write_string("Welcome to the first micro:bit shell.")
alive = True
new_command()

def on_forever():
    global letter, command
    if alive:
        letter = serial.read_string()
        serial.write_string(letter)
        if letter == ";":
            letter = ""
        else:
            command = "" + command + letter
            letter = ""
    else:
        pass
basic.forever(on_forever)
