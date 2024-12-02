import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static printRoundResult() {
    OutputView.printNewLine();
    MissionUtils.Console.print('실행 결과')
  }

  static printRound(car, score) {
    MissionUtils.Console.print(`${car} : ${score}`)
  }

  static printWinner(winner) {
    MissionUtils.Console.print(`최종 우승자 : ${winner}`)
  }

  static printNewLine() {
    MissionUtils.Console.print('');
  }
}

export default OutputView;
