serial.redirect_to_usb()
serial.set_baud_rate(BaudRate.BAUD_RATE115200)
serial.write_line("Welcome to the first micro:bit shell.")
serial.write_string("" + control.device_name() + " ~ % ")

def on_forever():
    pass
basic.forever(on_forever)
