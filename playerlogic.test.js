const { realPlayer, Aiplayer } = require('./playerlogic')
const createGameboard = require('./gameboard')

test('test if each has own gameboard', () => {

    const realPlayerTest = realPlayer('Ana')

    expect(realPlayerTest.createGameBoard).toBeDefined()
})



test('test if AI has an own gameboard', () => {

    const AIplayerTest = Aiplayer('PC')
    expect(AIplayerTest.createGameBoard).toBeDefined()

})



test('coordinate generation no duplicates for AI', () => {
    const AIplayerTest = Aiplayer('PC')
    AIplayerTest.createCoordinates(4, 7)
    AIplayerTest.createCoordinates(4, 7)


    expect(AIplayerTest.usedCoordinates.filter(c => c[0] === 4 && c[1] === 7).length).toBe(1)

})

