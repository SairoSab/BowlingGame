import { BowlingGame } from "./index"

describe("BowlingGame", () => {
  it("verifies that the player starts a game with a score of 0 points", () => {
    const initialScore = 0;
    let bowlingGame = new BowlingGame()
    const score = bowlingGame.actualScore();

    expect(score).toEqual(initialScore);
  })
  it("throws two balls without knocking down all the pins and returns the sum of both", () => {
    const turnScore = 9;
    const firstTryBall = 4;
    const secondTryBall = 5;
    let bowlingGame = new BowlingGame()

    bowlingGame.turnScores(firstTryBall, secondTryBall)
    const score = bowlingGame.actualScore();

    expect(score).toEqual(turnScore);
  })
})
