proc squareOfSum {n} {
    set sum [expr {($n * ($n + 1)) / 2}]
    expr {$sum * $sum}
}

proc sumOfSquares {n} {
    expr {$n * ($n + 1) * (2 * $n + 1) / 6}
}

proc differenceOfSquares {n} {
    expr {[squareOfSum $n] - [sumOfSquares $n]}
}
