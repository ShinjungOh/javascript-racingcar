import OutputView from "../view/OutputView.js";

class RaceWinner {
  #scoreBoard;
  #winner = [];

  constructor(scoreBoard) {
    this.#scoreBoard = scoreBoard;
  }

  finalWinner() {
    const highScore = this.#getHighScore();

    this.#scoreBoard.forEach((value, key) => {
      if (value.length === highScore) {
        this.#winner.push(key);
      }
    });

    OutputView.printWinner(this.#winner);
  }

  #getHighScore() {
    let highScore = 0;

    this.#scoreBoard.forEach((value) => {
      if (value.length > highScore) {
        highScore = value.length;
      }
    });

    return highScore;
  }
}

export default RaceWinner;
