import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static printRoundResult() {
    OutputView.printNewLine();
    MissionUtils.Console.print('실행 결과')
  }

  static printWinner(winner) {
    OutputView.printNewLine();
    MissionUtils.Console.print(`최종 우승자 : ${winner}`)
  }

  static printNewLine() {
    MissionUtils.Console.print('\n');
  }
}

export default OutputView;
