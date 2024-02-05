raindrops <- function(number) {
  result <- character()
  if (number %% 3 == 0) {
    result <- paste0(result, "Pling")
  }
  if (number %% 5 == 0) {
    result <- paste0(result, "Plang")
  }
  if (number %% 7 == 0) {
    result <- paste0(result, "Plong")
  }
  if (length(result) == 0) {
    result <- as.character(number)
  }
  return(result)
}
