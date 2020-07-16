input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    if (x == 0) {
        x = 5
    }
    x = x - 1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    if (x == 4) {
        x = -1
    }
    x += 1
    led.plot(x, y)
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    if (y == 4) {
        while (y != 0) {
            basic.pause(1000)
            led.unplot(x, y)
            y = y - 1
            led.plot(x, y)
        }
    }
})
