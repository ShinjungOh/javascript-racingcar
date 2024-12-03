import OutputView from "../view/OutputView.js";

class RaceWinner {
  #scoreBoard;
  #winner = [];

  constructor(scoreBoard) {
    this.#scoreBoard = scoreBoard;
  }

  finalWinner() {
    let highScore = 0;

    this.#scoreBoard.forEach((value) => {
      if (value.length > highScore) {
        highScore = value.length;
      }
    });

    this.#scoreBoard.forEach((value, key) => {
      if (value.length === highScore) {
        this.#winner.push(key);
      }
    })

    OutputView.printWinner(this.#winner);
  }
}

export default RaceWinner;
