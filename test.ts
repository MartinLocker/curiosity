Oled.init(128, 32)
Oled.zoom(false, false)
Oled.writeStringNewLine("Hello World")
Oled.zoom(true, false)
Oled.writeStringNewLine("Hello World")
Oled.zoom(false, true)
Oled.writeStringNewLine("Hello World")

basic.forever(function () {
    ServoMotor.setServoMotor(AnalogPin.P13, -50);
    basic.pause(500)
    ServoMotor.setServoMotor(AnalogPin.P13, 50);
    basic.pause(500)
})
