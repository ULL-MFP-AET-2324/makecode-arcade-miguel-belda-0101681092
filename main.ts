sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    comida.setPosition(randint(-8, scene.screenWidth()), randint(-8, scene.screenWidth()))
    info.changeScoreBy(1)
    arbol.changeScale(0.1, ScaleAnchor.Middle)
    info.startCountdown(5)
})
let comida: Sprite = null
let arbol: Sprite = null
scene.setBackgroundColor(9)
arbol = sprites.create(img`
    .............aafff..............
    ............addbbf..............
    ...........addbbf...............
    ..........faabbaf............aaa
    ....ffffffaaaaaaff.........aabba
    ..ffbbbbbbbbbbbbbafff.....adbba.
    ffbbbbbbbbbababbbbaaaff..addbbf.
    fbabbbbbffbbababbbaaaaafffdbbf..
    fbbb1111ff1bababbbaaaaaaabbbaf..
    .fb11111111bbbbbbaaaaaaaaabaaf..
    ..faaa33aa11bbbbaaaaaaaafffbbaf.
    ...fa131a111bbbaaaaabdba...fbbf.
    ....f33a111abbbfdddddaa.....fbbf
    .....ff1111fbdbbfddaa........fff
    .......aaaaafbdbbfa.............
    .............fffff..............
    `, SpriteKind.Player)
controller.moveSprite(arbol)
comida = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Food)
