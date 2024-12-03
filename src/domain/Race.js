import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";
import { range } from "../utils/range.js";

class Race {
  #scoreBoard;
  #count;

  constructor(scoreBoard, count) {
    this.#scoreBoard = scoreBoard;
    this.#count = count;
  }

  #racing() {
    this.#scoreBoard.forEach((value, key) => {
      const result = MissionUtils.Random.pickNumberInRange(0, 9);
      if (result >= 4) {
        this.#scoreBoard.set(key, value + '-');
      }
      OutputView.printRound(key, this.#scoreBoard.get(key));
    });
  }

  racingRound() {
    const result = range(this.#count);
    OutputView.printRoundResult();
    result.forEach(() => {
      this.#racing();
      OutputView.printNewLine();
    });
  }
}

export default Race;
