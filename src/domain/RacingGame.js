import InputView from "../view/InputView.js";

class RacingGame {
  async play() {
    const cars = await InputView.readLineCarNames();
    console.log(cars);

    const count = await InputView.readLineCount();
    console.log(count);
  }
}

export default RacingGame;
