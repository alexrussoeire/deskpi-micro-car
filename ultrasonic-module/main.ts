/**
 * Custom blocks for the Deskpi Ultrasonic Extension
 */
//% weight=100 color=#0fbc11 icon="\uf11b" block="ultrasonic"
namespace deskpi_ultrasonic_module {

    /**
     * Gets the sonar distance.
     */
    //% blockId=robot_get_sonar_distance 
    //% block="get sonar distance"
    export function get_sonar_distance(): number {
        // Your actual hardware logic goes here
        //basic.showArrow(ArrowNames.North);
        return 42;
    }
}