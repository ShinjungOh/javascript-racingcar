# 에러 및 해결 방법 모음

## class 문법 

### static 사용 

```js
class InputView {
  static async readLineCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = input.toString().split(',');
    
    this.#validateCarNames(carNames); // ⬅️
    return carNames;
  }

  #validateCarNames(input) { // static 추가하면 해결
    this.#isCarNameOnlyOne(input);
  }
}
```

```
file:///Users/sjoh/precourse/javascript-racingcar/src/view/InputView.js:8
    this.#validateCarNames(carNames);
         ^
         
TypeError: Receiver must be an instance of class InputView
    at InputView.readLineCarNames (file:///Users/sjoh/precourse/javascript-racingcar/src/view/InputView.js:8:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async RacingGame.play (file:///Users/sjoh/precourse/javascript-racingcar/src/domain/RacingGame.js:5:18)
```

- static 메서드는 클래스의 인스턴스를 생성하지 않고도 호출할 수 있는 메서드
- `this`가 클래스 자체를 참조
- InputView 클래스에서 메서드들이 모두 static으로 선언된 이유 
  - 해당 클래스가 특정 인스턴스를 생성하지 않고도 기능을 제공하기 위해 설계되었기 때문
  - -> 유틸리티 클래스
- 메서드에서 static을 제거하면, 클래스의 인스턴스를 통해서만 호출할 수 있는 인스턴스 메서드가 되어버림
