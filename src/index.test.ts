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
  it("throws four balls in two turns without knocking down all the pins and returns the total sum", () => {
    const totalScore = 16;
    let bowlingGame = new BowlingGame()
    bowlingGame.turnScores(9, 0)
    bowlingGame.turnScores(3, 4)

    const score = bowlingGame.actualScore();

    expect(score).toEqual(totalScore);
  })

})
