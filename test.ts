Oled.init(128, 32)
Oled.zoom(false, false)
Oled.writeStringNewLine("Hello World")
Oled.zoom(true, false)
Oled.writeStringNewLine("Hello World")
Servo.setZero(1630)
//Oled.zoom(false, true)
//Oled.writeNumNewLine(Servo.zero)

basic.forever(function () {
    Servo.setServoMotor(AnalogPin.P14, -50);
    basic.pause(500)
    Servo.setServoMotor(AnalogPin.P14, 50);
    basic.pause(500)
})
