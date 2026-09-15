const shipLogic = require('./ship')


test('test hitting function', () => {


    const testingHittingBoat = shipLogic(4)

    testingHittingBoat.shipHits()
    expect(testingHittingBoat.shipHit).toBe(1)

})


test('testing sinking function', () => {

    const testingHittingBoat = shipLogic(2)

    testingHittingBoat.shipHits()
    testingHittingBoat.shipHits()
    testingHittingBoat.IsshipSunk()

    expect(testingHittingBoat.IsshipSunk()).toBe(true)


})