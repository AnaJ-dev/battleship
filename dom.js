import { realPlayer, Aiplayer } from './playerlogic.js'
import ship from './ship.js'


const realPlayerSelectorTable = document.querySelector('.realPlayerTabe')
const botPlayerSelectorTable = document.querySelector('.AIPlayerTabel')

const personPlay = realPlayer('Tinky')
const pcBot = Aiplayer('pcNoob1')


// AI places ships randomly
let c1 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
let r1 = pcBot.createGameBoard.placeShipCoordinate(ship(5), false, c1.row, c1.column)
while (!r1 || r1 === false || typeof r1 === 'string') {
    c1 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
    r1 = pcBot.createGameBoard.placeShipCoordinate(ship(5), false, c1.row, c1.column)
}

let c2 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
let r2 = pcBot.createGameBoard.placeShipCoordinate(ship(4), false, c2.row, c2.column)
while (!r2 || r2 === false || typeof r2 === 'string') {
    c2 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
    r2 = pcBot.createGameBoard.placeShipCoordinate(ship(4), false, c2.row, c2.column)
}

let c3 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
let r3 = pcBot.createGameBoard.placeShipCoordinate(ship(3), false, c3.row, c3.column)
while (!r3 || r3 === false || typeof r3 === 'string') {
    c3 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
    r3 = pcBot.createGameBoard.placeShipCoordinate(ship(3), false, c3.row, c3.column)
}

let c4 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
let r4 = pcBot.createGameBoard.placeShipCoordinate(ship(4), false, c4.row, c4.column)
while (!r4 || r4 === false || typeof r4 === 'string') {
    c4 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
    r4 = pcBot.createGameBoard.placeShipCoordinate(ship(4), false, c4.row, c4.column)
}

let c5 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
let r5 = pcBot.createGameBoard.placeShipCoordinate(ship(2), false, c5.row, c5.column)
while (!r5 || r5 === false || typeof r5 === 'string') {
    c5 = pcBot.createCoordinates(pcBot.randomCoordinateRow(), pcBot.randomCoordinateColumn())
    r5 = pcBot.createGameBoard.placeShipCoordinate(ship(2), false, c5.row, c5.column)
}


const shipsToPlace = [5, 4, 4, 3, 2]
let currentShipIndex = 0
let selectedCells = []
let gameOver = false
const restartBtn = document.getElementById('restartBtn')
const statusEl = document.getElementById('status')
restartBtn.addEventListener('click', () => location.reload())


function render(correspondingTable, player, hideShips = false) {

    for (let i = 0; i < player.createGameBoard.gameGrid.length; i++) {
        for (let j = 0; j < player.createGameBoard.gameGrid[i].length; j++) {
            let test = correspondingTable.tBodies[0].rows[i].cells[j]
            test.dataset.row = i
            test.dataset.col = j
            let value = player.createGameBoard.gameGrid[i][j]
            if (typeof value === 'object') {
                test.innerText = hideShips ? 0 : 'x'
            } else {
                test.innerText = value
            }
            if (value === '+') {
                test.classList.add('hit')
            }
            if (value === '-') {
                test.classList.add('miss')
            }
        }
    }

}


function isValidSelection(cells, requiredLength) {
    if (cells.length !== requiredLength) return false

    const rows = cells.map(c => c.row)
    const cols = cells.map(c => c.col)

    const sameRow = rows.every(r => r === rows[0])
    const sameCol = cols.every(c => c === cols[0])

    if (!sameRow && !sameCol) return false

    if (sameRow) {
        const sorted = cols.slice().sort((a, b) => a - b)
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] !== sorted[i - 1] + 1) return false
        }
    } else {
        const sorted = rows.slice().sort((a, b) => a - b)
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] !== sorted[i - 1] + 1) return false
        }
    }

    return true
}


realPlayerSelectorTable.addEventListener('click', (event) => {
    if (currentShipIndex >= shipsToPlace.length) return
    if (event.target.tagName !== 'TD') return

    const col = parseInt(event.target.dataset.col)
    const row = parseInt(event.target.dataset.row)

    const alreadySelected = selectedCells.findIndex(c => c.row === row && c.col === col)
    if (alreadySelected !== -1) {
        selectedCells.splice(alreadySelected, 1)
        event.target.style.background = ''
    } else {
        selectedCells.push({ row, col })
        event.target.style.background = 'lightblue'
    }

    const requiredLength = shipsToPlace[currentShipIndex]

    if (selectedCells.length === requiredLength) {
        if (isValidSelection(selectedCells, requiredLength)) {
            const rows = selectedCells.map(c => c.row)
            const cols = selectedCells.map(c => c.col)
            const sameRow = rows.every(r => r === rows[0])
            const direction = sameRow
            const startRow = Math.min(...rows)
            const startCol = Math.min(...cols)

            const result = personPlay.createGameBoard.placeShipCoordinate(ship(requiredLength), direction, startRow, startCol)

            if (result !== false && typeof result !== 'string') {
                selectedCells.forEach(c => {
                    realPlayerSelectorTable.tBodies[0].rows[c.row].cells[c.col].style.background = ''
                })
                selectedCells = []
                currentShipIndex++
                render(realPlayerSelectorTable, personPlay, false)

                if (currentShipIndex >= shipsToPlace.length) {
                    statusEl.style.display = 'none'
                    alert('All ships placed! Game starts now.')
                } else {
                    statusEl.innerHTML = `Place your ship of size <strong>${shipsToPlace[currentShipIndex]}</strong> — click ${shipsToPlace[currentShipIndex]} cells in a row or column`
                }
            } else {
                selectedCells.forEach(c => {
                    realPlayerSelectorTable.tBodies[0].rows[c.row].cells[c.col].style.background = ''
                })
                selectedCells = []
                statusEl.innerHTML = `❌ Overlapping or out of bounds! Place ship of size <strong>${shipsToPlace[currentShipIndex]}</strong>`
            }
        } else {
            selectedCells.forEach(c => {
                realPlayerSelectorTable.tBodies[0].rows[c.row].cells[c.col].style.background = ''
            })
            selectedCells = []
            statusEl.innerHTML = `❌ Must be in a straight line! Place ship of size <strong>${shipsToPlace[currentShipIndex]}</strong>`
        }
    }
})


botPlayerSelectorTable.addEventListener('click', (event) => {
    if (gameOver) return
    if (currentShipIndex < shipsToPlace.length) return
    if (event.target.tagName !== 'TD') return

    const forColumn = parseInt(event.target.dataset.col)
    const forRow = parseInt(event.target.dataset.row)

    const cell = pcBot.createGameBoard.gameGrid[forRow][forColumn]
    if (cell === '-' || cell === '+') return

    pcBot.createGameBoard.recieveAttack(forRow, forColumn)
    if (pcBot.createGameBoard.shipSunk() !== false) {
        gameOver = true
        render(botPlayerSelectorTable, pcBot, false)
        restartBtn.style.display = 'block'
        alert('you won')
        return
    }
    render(botPlayerSelectorTable, pcBot, true)

    let botRow, botCol
    do {
        botRow = Math.floor(Math.random() * 10)
        botCol = Math.floor(Math.random() * 10)
    } while (personPlay.createGameBoard.gameGrid[botRow][botCol] === '-' || personPlay.createGameBoard.gameGrid[botRow][botCol] === '+')

    personPlay.createGameBoard.recieveAttack(botRow, botCol)
    if (personPlay.createGameBoard.shipSunk() !== false) {
        gameOver = true
        render(realPlayerSelectorTable, personPlay, false)
        restartBtn.style.display = 'block'
        alert('bot won')
        return
    }
    render(realPlayerSelectorTable, personPlay, false)
})


render(realPlayerSelectorTable, personPlay, false)
render(botPlayerSelectorTable, pcBot, true)
