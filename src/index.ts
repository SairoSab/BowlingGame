export class BowlingGame {
  score = 0
  strike = 0
  strikeScore = 0
  actualScore(): number {
    return this.score
  }
  turnScores(firstTryBall: number, secondTryBall: number) {
    if (this.strike > 0){
      if (firstTryBall === 10){
        this.strikeScore += firstTryBall
        this.strike -1
      }
      else {
        this.strikeScore += firstTryBall + secondTryBall
        this.strike - 2
      }
    }
    if (firstTryBall === 10){
      this.strike += 2
    }
    this.score += firstTryBall + secondTryBall + this.strikeScore
  }
}