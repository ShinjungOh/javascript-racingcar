import { MissionUtils } from "@woowacourse/mission-utils";

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
    });
  }

  racingRound() {
    const result = this.range(this.#count);
    result.forEach(() => this.#racing());
    console.log(this.#scoreBoard.entries());
  }
}

export default Race;
