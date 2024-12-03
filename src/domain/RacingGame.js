import InputView from "../view/InputView.js";
import Race from "./Race.js";
import RaceWinner from "./RaceWinner.js";

class RacingGame {
  #scoreBoard = new Map();

  async play() {
    const cars = await InputView.readLineCarNames();
    cars.forEach((car) => this.#scoreBoard.set(car, ''));

    const count = await InputView.readLineCount();

    const race = new Race(this.#scoreBoard, count);
    race.racingRound();

    const raceWinner = new RaceWinner(this.#scoreBoard);
    raceWinner.finalWinner();
  }

  static get scoreBoard() {
    return this.#scoreBoard;
  }
}

export default RacingGame;
