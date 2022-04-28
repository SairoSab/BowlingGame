export class BowlingGame {
  score = 0
  actualScore(): number {
    return this.score
  }
  turnScores(firstTryBall: number, secondTryBall: number) {
    this.score += firstTryBall + secondTryBall
  }
}