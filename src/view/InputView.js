import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  static async readLineCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = input.toString().split(',');

    this.#validateCarNames(carNames);

    return carNames;
  }

  static #validateCarNames(input) {
    this.#isCarNameOnlyOne(input);

    input.forEach((car) => {
      this.#validateCarNameLength(car);
    });
  }

  static #isCarNameOnlyOne(input) {
    if (input.length === 1) {
      throw new Error('[ERROR] 자동차 이름은 2대 이상 입력해야 합니다.');
    }
  }

  static #validateCarNameLength(input) {
    if (input.length < 1 || input.length >= 6) {
      throw new Error('[ERROR] 자동차 이름의 길이가 잘못되었습니다.');
    }
  }

  static async readLineCount() {
    const input = MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return input;
  }
}

export default InputView;
