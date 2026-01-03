/**
 * Custom blocks for the Deskpi Motor Extension
 */
//% weight=100 color=#0fbc11 icon="\uf11b" block="motor"
namespace motor {

    /**
     * Drives the car forward at a specific speed.
     * @param speed the speed of the motor, eg: 50
     */
    //% blockId=motor_drive_forward 
    //% block="drive forward at speed %speed"
    //% speed.min=0 speed.max=100
    export function driveForward(speed: number): void {
        // Your actual hardware logic goes here
        //basic.showArrow(ArrowNames.North);
    }

    /**
     * Stops the car immediately.
     */
    //% blockId=motor_stop 
    //% block="stop the car"
    //% weight=90
    export function stop(): void {
        // Logic to cut power to motors
        //basic.clearScreen();
    }
}