import shipLogic from './ship.js'
import createGameboard from './gameboard.js'




function realPlayer(realPlayer) {

    let createGameBoard = createGameboard()

    return {
        realPlayer,
        createGameBoard,
    }

}

console.log(realPlayer('Ana'))


function Aiplayer(aiPlayer) {

    let createGameBoard = createGameboard()
    let usedCoordinates = []


    let randomCoordinateRow = function () {
        let randomNumRow = Math.floor(Math.random() * 10);
        return randomNumRow
    }

    let randomCoordinateColumn = function () {
        let randomNumColumn = Math.floor(Math.random() * 10);
        return randomNumColumn
    }


    let createCoordinates = function (row, column) {

        for (let i = 0; i < usedCoordinates.length; i++) {

            ///if (4 === row && 7 === column) {
            // if (4 === 4 && 7 === 7)
            if (usedCoordinates[i][0] === row && usedCoordinates[i][1] === column) {
                return createCoordinates(randomCoordinateRow(), randomCoordinateColumn())
            }
        }

        usedCoordinates.push([row, column])

        return { row, column }

    }





    return {
        Aiplayer,
        createGameBoard,
        randomCoordinateRow,
        randomCoordinateColumn,
        createCoordinates,
        usedCoordinates
    }

}

export { realPlayer, Aiplayer }
