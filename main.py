music.ba_ding.play()
scene.set_background_color(8)
mySprite = sprites.create(img("""
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 f f 2 2 2 f f 2 2 2 2 2 2 2 
            2 2 f 2 f 2 f 2 f 2 2 2 2 f 2 2 
            2 2 f 2 2 f 2 2 f 2 2 2 f 2 f 2 
            2 2 f 2 2 2 2 2 f 2 2 f f f f f 
            2 2 f 2 2 2 2 2 f 2 f 2 2 f f 2 
            2 2 f 2 2 2 2 2 f 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 f f f f f f f 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)