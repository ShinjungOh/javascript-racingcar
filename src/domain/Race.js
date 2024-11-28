import { MissionUtils } from "@woowacourse/mission-utils";

class Race {
  #scoreBoard;
  #count;

  constructor(scoreBoard, count) {
    this.#scoreBoard = scoreBoard;
    this.#count = count;
  }

  // 이동 횟수만큼, 각 자동차별로 경주를 시작
  range(count, value) {
    return Array(count).fill(value);
  }

  // const result = this.range(this.#count);

  // 1회마다 각 자동차별 진전 여부 결정
  racing() {
    this.#scoreBoard.forEach((value, key) => {
      console.log('value', value);
      console.log('key', key);

      const result = MissionUtils.Random.pickNumberInRange(0, 9);
      if (result >= 4) {
        this.#scoreBoard.set(key, value + '-');
      }
    });

    console.log(this.#scoreBoard.entries());
  }
}

export default Race;
