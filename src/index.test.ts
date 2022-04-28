import { BowlingGame } from "./index"

describe("BowlingGame", () => {
  it("verifies that the player starts a game with a score of 0 points", () => {
    const initialScore = 0;
    let bowlingGame = new BowlingGame()

    const actualScore = bowlingGame.actualScore();

    expect(actualScore).toEqual(initialScore);
  })
  it("throws two balls without knocking down all the pins and returns the sum of both", () => {
    const turnScore = 9;
    const firstTryBall = 4;
    const secondTryBall = 5;
    let bowlingGame = new BowlingGame()
    bowlingGame.turnScores(firstTryBall, secondTryBall)

    const actualScore = bowlingGame.actualScore();

    expect(actualScore).toEqual(turnScore);
  })
  it("throws four balls in two turns without knocking down all the pins and returns the total sum", () => {
    const totalScore = 16;
    let bowlingGame = new BowlingGame()
    bowlingGame.turnScores(9, 0)
    bowlingGame.turnScores(3, 4)

    const actualScore = bowlingGame.actualScore();

    expect(actualScore).toEqual(totalScore);
  })
  it("scores two consecutive strikes knocking down all the pins in the first try", () => {
    const totalScore = 30;
    let bowlingGame = new BowlingGame()
    bowlingGame.turnScores(10, 0)
    bowlingGame.turnScores(10, 0)

    const score = bowlingGame.actualScore();

    expect(score).toEqual(totalScore);
  })
  it("scores three consecutive strikes knocking down all the pins in the first try", () => {
    const totalScore = 60;
    let bowlingGame = new BowlingGame()
    bowlingGame.turnScores(10, 0)
    bowlingGame.turnScores(10, 0)
    bowlingGame.turnScores(10, 0)

    const score = bowlingGame.actualScore();

    expect(score).toEqual(totalScore);
  })
  
})
