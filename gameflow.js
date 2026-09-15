const createGameboard = require('./gameboard')
const { realPlayer, Aiplayer } = require('./playerlogic')
const ship = require('./ship')







const realPerson = realPlayer('Ana')
const aiIndividual = Aiplayer('pcNoob')


realPerson.createGameBoard.placeShipCoordinate(ship(5), false, 1, 5)
realPerson.createGameBoard.placeShipCoordinate(ship(4), true, 7, 6)
realPerson.createGameBoard.placeShipCoordinate(ship(3), false, 0, 1)
realPerson.createGameBoard.placeShipCoordinate(ship(3), true, 9, 2)
realPerson.createGameBoard.placeShipCoordinate(ship(2), true, 3, 9)



let c1 = aiIndividual.createCoordinates(aiIndividual.randomCoordinateRow(), aiIndividual.randomCoordinateColumn())
aiIndividual.createGameBoard.placeShipCoordinate(ship(5), false, c1.row, c1.column)

let c2 = aiIndividual.createCoordinates(aiIndividual.randomCoordinateRow(), aiIndividual.randomCoordinateColumn())
aiIndividual.createGameBoard.placeShipCoordinate(ship(4), false, c2.row, c2.column)

let c3 = aiIndividual.createCoordinates(aiIndividual.randomCoordinateRow(), aiIndividual.randomCoordinateColumn())
aiIndividual.createGameBoard.placeShipCoordinate(ship(3), false, c3.row, c3.column)

let c4 = aiIndividual.createCoordinates(aiIndividual.randomCoordinateRow(), aiIndividual.randomCoordinateColumn())
aiIndividual.createGameBoard.placeShipCoordinate(ship(3), false, c4.row, c4.column)

let c5 = aiIndividual.createCoordinates(aiIndividual.randomCoordinateRow(), aiIndividual.randomCoordinateColumn())
aiIndividual.createGameBoard.placeShipCoordinate(ship(2), false, c5.row, c5.column)





//HUMAN attack AI
const AttackforAI = aiIndividual.createGameBoard.recieveAttack(ship(4), 1, 5)


//AI attack human

while (!aiIndividual.createGameBoard.shipSunk() && !realPerson.createGameBoard.shipSunk()) {
    const attackforHuman = aiIndividual.createCoordinates(aiIndividual.randomCoordinateRow(), aiIndividual.randomCoordinateColumn())
    realPerson.createGameBoard.recieveAttack(ship(5), attackforHuman.row, attackforHuman.column)
    const AttackforAI = aiIndividual.createGameBoard.recieveAttack(ship(4), 1, 5)

}