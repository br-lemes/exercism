#!/usr/bin/env bash

is_prime() {
    if (( $1 < 2 )); then
        return 1
    fi
    for ((i = 2; i < $1; i++)); do
        if (( $1 % $i == 0 )); then
            return 1
        fi
    done
    return 0
}

primes=""
for ((n = 2; n <= $1; n++)); do
    if is_prime "$n"; then
        primes="$primes$n "
    fi
done
echo "${primes% }"
