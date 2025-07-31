
sum_of_squares <- function(number) {
  return ((number * (number + 1) * (2 * number + 1)) / 6)
}

square_of_sum <- function(number) {
  sum <- (number * (number + 1)) / 2
  return (sum * sum)
}

difference_of_squares <- function(number) {
  return (square_of_sum(number) - sum_of_squares(number))
}
