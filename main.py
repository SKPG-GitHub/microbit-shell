serial.redirect_to_usb()
serial.set_baud_rate(BaudRate.BAUD_RATE115200)
command = "null"
alive = True
enter = True
serial.write_line("Welcome to the first micro:bit shell.")
while alive:
    serial.write_string("" + control.device_name() + " ~ % ")
    while enter:
        serial.write_string(serial.read_string())