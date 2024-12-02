import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";

class Race {
  #scoreBoard;
  #count;

  constructor(scoreBoard, count) {
    this.#scoreBoard = scoreBoard;
    this.#count = count;
  }

  range(count, value) {
    return Array(count).fill(value);
  }

  #racing() {
    this.#scoreBoard.forEach((value, key) => {
      const result = MissionUtils.Random.pickNumberInRange(0, 9);
      if (result >= 4) {
        this.#scoreBoard.set(key, value + '-');
      }
      OutputView.printRound(key, value);
    });
  }

  racingRound() {
    const result = this.range(this.#count);
    OutputView.printRoundResult();
    result.forEach(() => {
      this.#racing();
      OutputView.printNewLine();
    });
  }
}

export default Race;
