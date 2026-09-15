
//ship logic - lenght, hits, isSunk
// 

function shipLogic(length) {

    let shipCreation = {
        shipLength: length,
        shipHit: 0,
        shipSunk: false,
    }

    shipCreation.shipHits = function () {
        this.shipHit++
    }


    shipCreation.IsshipSunk = function () {

        if (this.shipHit === this.shipLength) {
            this.shipSunk = true
        }
        return this.shipSunk

    }

    return shipCreation


}




const shipMaking = shipLogic(5)
shipMaking.shipHits()
shipMaking.IsshipSunk()



export default shipLogic