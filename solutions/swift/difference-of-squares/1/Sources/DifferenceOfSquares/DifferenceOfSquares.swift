class Squares {
    let number: Int

    init(_ number: Int) {
        self.number = number
    }

    var sumOfSquares: Int {
        return (number * (number + 1) * (2 * number + 1)) / 6
    }

    var squareOfSum: Int {
        let sum = (number * (number + 1)) / 2
        return sum * sum
    }

    var differenceOfSquares: Int {
        return squareOfSum - sumOfSquares
    }
}
