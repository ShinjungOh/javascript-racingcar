import InputView from "../view/InputView.js";
import Race from "./Race.js";

class RacingGame {
  #scoreBoard = new Map();

  async play() {
    const cars = await InputView.readLineCarNames();

    cars.forEach((car) => this.#scoreBoard.set(car, ''));

    const count = await InputView.readLineCount();

    const race = new Race(this.#scoreBoard, count);
    race.racing();
  }

  static get scoreBoard() {
    return this.#scoreBoard;
  }
}

export default RacingGame;
