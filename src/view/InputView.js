import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";

class InputView {
  static async readLineCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = input.toString().split(',');

    this.#validateCarNames(carNames);

    return carNames;
  }

  static #validateCarNames(input) {
    this.#isCarNameOverOne(input);

    input.forEach((car) => this.#validateCarNameLength(car));
  }

  static #isCarNameOverOne(input) {
    if (input.length === 1) {
      throw new Error(MESSAGES.error.isCarNameOnlyOne);
    }
  }

  static #validateCarNameLength(input) {
    if (input.length < 1 || input.length >= 6) {
      throw new Error(MESSAGES.error.carNameLengthOver);
    }
  }

  static async readLineCount() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const parseInput = parseInt(input, 10);

    this.#validateCount(parseInput);

    return parseInput;
  }

  static #validateCount(input) {
    this.#isCountNotNaN(input);
    this.#isMinimumCount(input);
  }

  static #isCountNotNaN(input) {
    if (Number.isNaN(input)) {
      throw new Error(MESSAGES.error.isCountNaN);
    }
  }

  static #isMinimumCount(input) {
    if (input <= 0) {
      throw new Error(MESSAGES.error.isNotMinimumCount);
    }
  }
}

export default InputView;
