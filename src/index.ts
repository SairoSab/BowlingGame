export class BowlingGame {
  score = 0
  strike = 0
  strikeScore = 0
  turn : number = 1
  detailedTurnPuntuation = {
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
    7 : 0,
    8 : 0,
    9 : 0,
    10 : 0
  }
  throwsToSum = {
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
    7 : 0,
    8 : 0,
    9 : 0,
    10 : 0
  }
  actualScore(): number {
    return this.score
  }
  turnScores(firstTryBall: number, secondTryBall: number) {
    if (this.strike > 0){
      if (firstTryBall === 10){
        if (this.strikeScore < 20){
          this.strikeScore += 10
        }
        this.strike - 1
      }
      else {
        this.strikeScore  += firstTryBall + secondTryBall
        this.strike - 2
      }
    }
    if (firstTryBall === 10){
      this.throwsToSum[this.turn] = 2
    }
    this.score += firstTryBall + secondTryBall + this.strikeScore
  }
}