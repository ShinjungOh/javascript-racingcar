import InputView from "../view/InputView.js";
import Race from "./Race.js";
import OutputView from "../view/OutputView.js";

class RacingGame {
  #scoreBoard = new Map();

  async play() {
    const cars = await InputView.readLineCarNames();

    cars.forEach((car) => this.#scoreBoard.set(car, ''));

    const count = await InputView.readLineCount();

    const race = new Race(this.#scoreBoard, count);
    race.racingRound();

    OutputView.printWinner('winner');
  }

  static get scoreBoard() {
    return this.#scoreBoard;
  }
}

export default RacingGame;
