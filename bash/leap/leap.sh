#!/usr/bin/env bash

usage() {
    echo "Usage: $0 <year>"
    exit 1
}

leap_year() {
    (( $1 % 4 == 0 )) && (( $1 % 100 != 0 )) || (( $1 % 400 == 0 ))
}

[[ $# == 1 ]] || usage

[[ $1 =~ ^[0-9]+$ ]] || usage

leap_year $1 && echo "true" || echo "false"
