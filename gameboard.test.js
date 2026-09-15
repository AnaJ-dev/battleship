const createGameboard = require('./gameboard')
const shipLogic = require('./ship')


test('x marked in the correct place, horisontal', () => {


    const arrayBefore = [
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
    ];



    const board = createGameboard()
    let callshipAndCoordinates = board.placeShipCoordinate(shipLogic(3), true, 5, 3)

    expect(board.gameGrid).toEqual([
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 'x', 'x',
            'x', 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ],
        [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ]
    ]
    )





})









test('x marked in the correct place, vertical', () => {


    const arrayBefore = [
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
    ];

    const board = createGameboard()

    let callshipAndCoordinates = board.placeShipCoordinate(shipLogic(3), false, 2, 5)

    expect(board.gameGrid).toEqual(
        [
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                'x', 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                'x', 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                'x', 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ]
        ]
    )
})


test('test if grid row/column is empty', () => {


    const board = createGameboard()


    const arrayBefore = [
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
    ];

    board.recieveAttack(shipLogic(3), 1, 2)


    expect(board.gameGrid).toEqual(

        [
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, '-', 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ]
        ]

    )


})






test('test if grid row/column already has a boat there', () => {


    const board = createGameboard()

    board.placeShipCoordinate(shipLogic(1), true, 3, 3)

    board.recieveAttack(shipLogic(1), 3, 3)

    expect(board.gameGrid).toEqual(
        [
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, '+', 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ],
            [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0
            ]
        ]

    )


})


test('has ship sunk', () => {

    const board = createGameboard()


    const ship = shipLogic(1)
    board.placeShipCoordinate(ship, true, 3, 3)
    board.recieveAttack(ship, 3, 3)

    expect(board.shipSunk()).toBe(true)

})