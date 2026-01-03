/**
 * Custom blocks for the Deskpi Sonar Extension
 */
//% weight=100 color=#0fbc11 icon="\uf11b" block="sonar"
namespace sonar {

    /**
     * Gets the sonar distance.
     */
    //% blockId=robot_get_sonar_distance 
    //% block="get sonar distance"
    export function get_distance(): number {
        // Your actual hardware logic goes here
        //basic.showArrow(ArrowNames.North);
        return 42;
    }
}