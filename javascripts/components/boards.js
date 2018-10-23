import {loadBoards} from '../data/boardsData.js'

const writeBoards = (boards) => {
    let domString = '';
    boards.forEach(board => {
        domString += `
        <div class="board-card p-2">
        <img class="card-img-top" src="./db/default-img.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">42 Pins</p>
        </div>
    </div>
    `
    })
    $('#user-boards').html(domString); // prints to DOM
}

const initalizeBoardView = () => {
    loadBoards().then((boards) => {
        console.log('inside the .then')
        writeBoards(boards);
    }).catch((error) =>{
        console.error(error);
    })
    console.log('hello');
}

export {initalizeBoardView}
