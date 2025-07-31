#!/usr/bin/env bash

leap_year() {
    (( $1 % 4 == 0 )) && (( $1 % 100 != 0 )) || (( $1 % 400 == 0 ))
}

leap_year $1 && echo "true" || echo "false"
