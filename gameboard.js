//grid should be 10x10
//this represents ships placed on the grid

import shipLogic from './ship.js'

export default createGameboard


function createGameboard() {

    let missedAttacks = []
    let shipStorage = []

    let shipRules = {
        5: 1,
        4: 2,
        3: 1,
        2: 1
    }

    const gameGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]


    function placeShipCoordinate(callShip, direction, row, column) {

        if (direction === true && column + callShip.shipLength > 10) {
            return false
        }

        if (direction === false && row + callShip.shipLength > 10) {
            return false
        }

        for (let i = -1; i <= callShip.shipLength; i++) {
            if (direction === true) {
                if (column + i >= 0 && column + i < 10 && gameGrid[row][column + i] !== 0) return false
            } else {
                if (row + i >= 0 && row + i < 10 && gameGrid[row + i][column] !== 0) return false
            }
        }

        if (shipRules[callShip.shipLength] > 0) {

            for (let i = 0; i < callShip.shipLength; i++) {
                if (direction === true) {
                    gameGrid[row][column++] = callShip
                } else {
                    gameGrid[row++][column] = callShip
                }
            }

            shipStorage.push(callShip)
            shipRules[callShip.shipLength]--

            return gameGrid

        } else {
            return 'Ship of this length is not allowed'
        }

    }


    function recieveAttack(coordinate1Row, coordinate2Column) {

        const cell = gameGrid[coordinate1Row][coordinate2Column]

        if (cell === '-' || cell === '+') {
            return
        }

        if (typeof cell === 'object') {
            gameGrid[coordinate1Row][coordinate2Column] = '+'
            cell.shipHits()
        } else {
            gameGrid[coordinate1Row][coordinate2Column] = '-'
            missedAttacks.push([coordinate1Row, coordinate2Column])
        }

    }


    function shipSunk() {

        for (const el of shipStorage) {
            el.IsshipSunk()
            if (el.shipSunk !== true) {
                return false
            }
        }

        return true
    }

    return { placeShipCoordinate, gameGrid, recieveAttack, shipSunk }

}
