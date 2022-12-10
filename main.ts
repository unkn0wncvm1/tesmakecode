controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f . f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f . . . f . . . . 
        . . . . . f f f . . . f . . . . 
        . . . . . f f f . . . f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2)
    mySprite2.setBounceOnWall(true)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 454, 677, 255, 255, 6000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 f f . . f 2 . . . . . . 
        . . . 2 . . . . f 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        . . . 2 . f f f . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    mySprite.setStayInScreen(true)
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffff1111111111111fffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    66fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    666666666666fffffffffffffffff6666666666666666666ffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    666666666666666666666666666666666666666666666666666666fffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
    666666666666666666666666666666666666666666666666666666666fffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
    66666666666666666666666666666666666666666666666666666666666666fffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff
    6666666666666666666666666666666666666666666666666666666666666666666ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111fffff
    6666666666666666666666666666666666666666666666666666666666666666666666fffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111ffffff6
    6666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffff111111111111111111111111111111111111111111111111111111111111111ffffff66
    66666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffff111111111111111111111111111111111111111111111111111111111ffffff666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffff1111111111111111111111111111111111111111111111111111ffffff66666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffff11111111111111111111111111111111111111fffffff666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffff1111111111111111111111111ffffffff6666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff1111111111111ffffffffff666666666
    6666666666666666666666bbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffff66666666666
    66666666666666666bbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffff6666666666666
    66666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffff66666666666666666
    66666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666bbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbbbbbbbbbb1bbbb1bbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbbbbbbbbb1bbbbb1bbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbb1bbbbbb1bbbbbbbbbbb11bbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbb11bbb111bbbbbbbbb1111bbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbb1bb1b11bbbbb1bbb1bbb1bbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbb1b1bbbbbbbb1bbbbbbb1bbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbb11bbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbbbbbbbbbbbbbb66b1b1bbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666bbbbbbbbbbbbbbbbbbbbbbb6666611bbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbbbbbb11bbbbbbb6666611bbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbbbbbbbb1bbbb1b6666b1bbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbbbbbbbbb1b11bbb66661bbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbbbbbbbbb11bbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666bbbbbbbbbbbbbb11bb1bbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666bbbbbbbbbbbb11bbbb1bbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666bbbbbbbbbbbb1bbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666bbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11b11bbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111bbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bb1bbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666bbbbbbbbbbbb111bbbbbbb111bbbb1bbbbbb1bbb1bbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666bbbbbbbbbbb1bbbbbbbb1b11bbb111bbbb11bbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666bbbbbbbbbbb1bbbbbbb1b11bbbb1bbb1111bbbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666bbbbbbbbbbb11bbbbb1bbbbbbbb1bbbb11bbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666bbbbbbbbbbbb11bbb1bbbbbbbb1111bbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666bbbbbbbbbbb11bbb1111bbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666bbbbbb1111bbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666bbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    fff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
    fff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
    fff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
    fff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
    fff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111bbbb1111111111111111111111bbbbbbbbbb1111111111111111111bbbbbbbbbbbbbbbb111111111111111111111bbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbb111111111111111111
    1111bbbb1111111111111111111111bbbbbbbbbb1111111111111111111bbbbbbbbbbbbbbbb111111111111111111111bbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbb111111111111111111
    1111bbbb1111111111111111111111bbbbbbbbbb1111111111111111111bbbbbbbbbbbbbbbb111111111111111111111bbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbb111111111111111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
