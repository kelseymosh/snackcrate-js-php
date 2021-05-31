//Write a function to create an 'X' by 'X' tic tac toe board defined by the "boardSize" value and make it playable.
    //Retrieve information from a GET to dictate moves
    //Key and example Values In the GET
        //XY='0,3'
        //turn=x

let boardSize = 3
const board = document.getElementById("board")

const createRows = (boardSize) => {
    for (r = 0; r < boardSize; r++){
        let div = document.createElement("div")
        board.append(div).className = "square"
    }
}
