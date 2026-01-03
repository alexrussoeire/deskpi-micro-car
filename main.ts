let value: number;
let text: string;
//  Input/output pin list
let SONAR_TRIG_PIN = DigitalPin.P12
let SONAR_ECHO_PIN = DigitalPin.P9
//  I2C Address list
let I2C_OLED_ADDR = 60
OLED12864_I2C.init(60)
//  Get the distance from the sonar and the object in front of it.
function get_sonar_distance(): number {
    let value = sonar.ping(SONAR_TRIG_PIN, SONAR_ECHO_PIN, PingUnit.Centimeters)
    return value
}

//  Write text to the OLED display
function screen_write_line(x: number, y: number, text: string) {
    OLED12864_I2C.showString(x, y, text, 1)
}

let max_loop = 50
// for loop_num in range(0, max_loop):
while (1) {
    //  Take measurement
    value = get_sonar_distance()
    //  Display measurement
    text = "Far: " + ("" + value) + "   "
    screen_write_line(1, 1, text)
    //  Sleep for 0.5 second
    pause(500)
}
