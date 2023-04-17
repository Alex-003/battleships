const gameBoardContainer = document.querySelector("#gamesboard-container");
const optionContainer = document.querySelector(".option-container");
const flipButton = document.querySelector("#flip-button");

let angle = 0;

//flipping the ships in 90deg
function flip() {
  const optionShips = Array.from(optionContainer.children);
  angle = angle === 0 ? 90 : 0;
  optionShips.forEach(
    (optionShips) => (optionShips.style.transform = `rotate(${angle}deg)`)
  );
}
flipButton.addEventListener("click", flip);

// Creating boards
const width = 10;

function createBoard(color, user) {
  const BoardContainer = document.createElement("div");
  BoardContainer.classList.add("game-board");
  BoardContainer.style.backgroundColor = color;
  BoardContainer.id = user;

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = i;
    BoardContainer.append(block);
  }

  gameBoardContainer.append(BoardContainer);
}
createBoard("orange", "player");
createBoard("blue", "computer");

// Creating ships

class Ship {
    constructor(name, length){
        this.name = name
        this.length = length
    }
}

const destroyer = new Ship('destroyer',2)
const submarine = new Ship('submarine',3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]
