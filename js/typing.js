new TypeIt(".type-anim", {
    speed: 50,
    startDelay: 500,
    loop: true,
    cursorSpeed: 1000,
    })

    .type("DEVELOPER", { delay: 30 })
    .pause(2000)
    .delete(9, { delay: 0 })
    .type("Larry Daniels", { delay: 30 })
    .pause(2000)
    .delete(13, { delay: 0 })
    .type("Designer", { delay: 30 })
    .pause(2000)
    .delete(8, { delay: 0 })
    .go()




    