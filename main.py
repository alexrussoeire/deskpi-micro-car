# Input/output pin list
SONAR_TRIG_PIN = DigitalPin.P12
SONAR_ECHO_PIN = DigitalPin.P9

# I2C Address list
I2C_OLED_ADDR = 60

OLED12864_I2C.init(60)

# Get the distance from the sonar and the object in front of it.
def get_sonar_distance():
    value = sonar.ping(SONAR_TRIG_PIN, SONAR_ECHO_PIN, PingUnit.CENTIMETERS)
    return value

# Write text to the OLED display
def screen_write_line(x, y, text):
    OLED12864_I2C.show_string(x, y, text, 1)

max_loop = 50

#for loop_num in range(0, max_loop):
while(1):
    # Take measurement
    value = get_sonar_distance()

    # Display measurement
    text = 'Far: ' + str(value) + '   '
    screen_write_line(1, 1, text)

    # Sleep for 0.5 second
    pause(500)