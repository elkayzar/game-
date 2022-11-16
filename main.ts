let start = 0
let stop = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    stop = input.runningTime() - start
    score = Math.abs(stop - 10000)
    if (score > 2000) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
