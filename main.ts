let RIR = 0
let MIR = 0
let LIR = 0
led.enable(false)
let v = 1200
basic.forever(function () {
    LIR = pins.analogReadPin(AnalogPin.P2)
    MIR = pins.analogReadPin(AnalogPin.P3)
    RIR = pins.analogReadPin(AnalogPin.P10)
    if (LIR > 700 && (MIR <= 700 && MIR <= 700)) {
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P9, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P8, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P10, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P11, v)
    } else if (LIR <= 700 && MIR <= 700 && RIR > 700) {
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P9, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P8, v)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P10, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P11, 0)
    } else if (LIR <= 700 && MIR <= 700 && RIR <= 700) {
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P9, v)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P8, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P10, v)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P11, 0)
    } else {
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P9, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P6, v)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P10, 0)
        UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P11, v)
    }
})
