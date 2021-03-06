const loadPinsForBoard = (boardId) => {
    return new Promise((resolve, reject) => {
        $.get('../db/pins.json')
        .done((data) => {
            const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId)
            resolve(pinsForBoards)
        })
        .fail((error) => {
            console.error(error);
            reject(error);
        })
    })
} 

//This is coming from 
const loadPinsOnBoards = (boards) => {
    return new Promise((resolve, reject) => {
        //$.get('data.json').done(function (data)
        $.get('../db/pins.json')
            .done((data) => {
                const boardsWithPins = boards.map(board => {
                    const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
                    board.pins = matchingPins; // adding a new key to board as pin
                    return board;
                })
                resolve(boardsWithPins);
    })
    .fail((error) => {
        reject('error loadPinsOnBoards', error);
    })
})

}

export {loadPinsForBoard, loadPinsOnBoards};