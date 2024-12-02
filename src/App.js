import RacingGame from "./domain/RacingGame.js";

class App {
  async run() {
    const racingGame= new RacingGame();
    await racingGame.play();
  }
}

export default App;
