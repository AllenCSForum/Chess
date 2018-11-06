const BOARD_SIZE = 8;

var selectedSpace = null;

function createBoard() {
	var table = document.getElementById("chessBoard");
	for (var rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex++) {
		var currRow = table.insertRow(-1);
		for (var colIndex = 0; colIndex < BOARD_SIZE; colIndex++) {
			var currCell = currRow.insertCell(-1);
			var piece = document.createElement("img");
			if ((rowIndex + colIndex) % 2 == 0) {
				currCell.classList.add("whiteSquare");
			}
			else {
				currCell.classList.add("blackSquare");
			}
			//black piece
			if (rowIndex < 2) {
				currCell.classList.add("occupied");
				currCell.setAttribute("onclick", "showMovableSpaces(this)");
				//pawn
				if (rowIndex == 1) {
					piece.setAttribute("src", "black_pawn.png");
					piece.classList.add("blackPiece");
					piece.classList.add("pawn");
				}
				//rook
				else if (colIndex == 0 || colIndex == BOARD_SIZE - 1) {

				}
				//knight
				else if (colIndex == 1 || colIndex == BOARD_SIZE - 2) {

				}
				//bishop
				else if (colIndex == 2 || colIndex == BOARD_SIZE - 3) {

				}
				//queen
				else if (colIndex == 3) {

				}
				//king
				else {

				}
			}
			//white piece
			else if (rowIndex >= BOARD_SIZE - 2) {
				piece.classList.add("whitePiece");
				piece.classList.add("piece");
				//pawn
				if (rowIndex == BOARD_SIZE - 1) {
					piece.setAttribute("src", "white_pawn.png");
					piece.classList.add("pawn");
				}
				//rook
				else if (colIndex == 0 || colIndex == BOARD_SIZE - 1) {
					piece.setAttribute("src", "white_rook.png");
					piece.classList.add("rook");
				}
				//knight
				else if (colIndex == 1 || colIndex == BOARD_SIZE - 2) {
					piece.setAttribute("src", "white_knight.png");
					piece.classList.add("knight");
				}
				//bishop
				else if (colIndex == 2 || colIndex == BOARD_SIZE - 3) {
					piece.setAttribute("src", "white_bishop.png");
					piece.classList.add("bishop");
				}
				//queen
				else if (colIndex == 3) {
					piece.setAttribute("src", "white_queen.png");
					piece.classList.add("queen");
				}
				//king
				else {
					piece.setAttribute("src", "white_king.png");
					piece.classList.add("king");
				}
			}
		} 
	}
}

function showMovableSpaces(space) {
	var piece = space.getElementsByClassName("piece")[0];
	selectedSpace = space;
	var movableSpace = document.createElement("div");
	movableSpace.classList.add("movableSpace");
	if (piece.classList.contains("blackPiece")) {
		if (piece.classList.contains("pawn")) {

		}
		else if (piece.classList.contains("bishop")) {

		}
		else if (piece.classList.contains("knight")) {

		}
		else if (piece.classList.contains("rook")) {

		}
		else if (piece.classList.contains("queen")) {

		} 
		else {

		}
	}
	else if (piece.classList.contains("whitePiece")) {

	}
}

document.addEventListener("click", function(event){
	if (selectedSpace && event.target != selectedSpace) {
		selectedSpace = null;
	}
});

function doMove(space) {

}
