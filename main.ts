input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    模式 = 0
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    game.pause()
    basic.clearScreen()
    模式 = 1
})
let 方向 = 0
let y = 0
let x = 0
let 模式 = 0
input.calibrateCompass()
let sprite = game.createSprite(2, 2)
模式 = 0
basic.forever(function () {
    if (模式 == 0) {
        x = Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 4)
        y = Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 4)
        sprite.set(LedSpriteProperty.X, x)
        sprite.set(LedSpriteProperty.Y, y)
    } else if (模式 == 1) {
        方向 = input.compassHeading()
        if (方向 < 22.5) {
            basic.showArrow(ArrowNames.North)
        } else if (方向 < 67.5) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (方向 < 112.5) {
            basic.showArrow(ArrowNames.East)
        } else if (方向 < 157.5) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (方向 < 202.5) {
            basic.showArrow(ArrowNames.South)
        } else if (方向 < 247.5) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (方向 < 292.5) {
            basic.showArrow(ArrowNames.West)
        } else if (方向 < 337.5) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            basic.showArrow(ArrowNames.North)
        }
    }
})
