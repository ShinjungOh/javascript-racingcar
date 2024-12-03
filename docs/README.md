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


<br>

## Map 생성자 

[MDN Map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/set)  
[모던 자바스크립트 맵과 셋](https://ko.javascript.info/map-set)

### Map.forEach

Map 인스턴스의 forEach() 메서드는 이 Map 객체의 키/값 쌍마다 각각 제공된 함수를 삽입되었던 순서대로 실행

```
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

```js
// 예제 코드
function logMapElements(value, key, map) {
  console.log(`${key} = ${value}`);
}
```

* callbackFn : 맵의 각 항목에 대해 실행할 함수. 이 함수는 다음 인수를 사용하여 호출됨
  * value : 각 반복의 값
  * key : 각 반복의 키
  * map : 반복되는 Map

#### 🚨인수의 순서에 주의할 것

```js
 this.#scoreBoard.forEach((value, key) => {
  console.log('value', value);
  console.log('key', key);
})
```

#### value 값을 추가할 때

기존에 Map.set()을 했던 방식으로 값을 추가하기

```js
this.#scoreBoard.set(key, value + '-');
```


### 최신값 유지하기

주어진 테스트에 통과하지 않아서 콘솔을 사용해 값을 출력해보았고, 문제가 된 지점을 발견   
`Map.set()`으로 추가한 최신 결과를 이용하지 않고, 기존의 값(`value`)을 불러와서 사용했기 때문에 문제 발생

유사 사례로 리액트에서도 useState를 이용하면서 비슷한 실수를 했던 것이 생각났다.   
setState가 비동기적으로 작동해, 최신 값을 반영하지 못해 콘솔에 값이 한박자 늦게 찍혀서(기존 값을 출력해서) 디버깅에 어려움을 겪은적이 있었다.

**항상 최신 상태를 유지할 것!**

```js
  #racing() {
    this.#scoreBoard.forEach((value, key) => {
      const result = MissionUtils.Random.pickNumberInRange(0, 9);
      if (result >= 4) {
        this.#scoreBoard.set(key, value + '-');
      }
      OutputView.printRound(key, value); // 기존 코드 ❌   
      OutputView.printRound(key, this.#scoreBoard.get(key)); // 수정 코드 ✅   
    });
  }
```
