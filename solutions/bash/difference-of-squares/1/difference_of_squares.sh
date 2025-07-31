#!/usr/bin/env bash

square_of_sum() {
    sum="$(( $1 * ($1 + 1) / 2))"
    echo "$(( $sum * $sum ))"
}

sum_of_squares() {
    echo "$(( $1 * ($1 + 1) * (2 * $1 + 1) / 6))"
}

difference() {
    echo "$(( $(square_of_sum $1) - $(sum_of_squares $1)))"
}

eval "$1 $2"
