import RacingGame from "./domain/RacingGame.js";

class App {
  async run() {
    const racingGame= new RacingGame();
    racingGame.play();
  }
}

export default App;
