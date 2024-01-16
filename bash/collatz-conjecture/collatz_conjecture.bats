#!/usr/bin/env bats
load bats-extra

# local version: 1.2.1.0

@test "zero steps for one" {
    run bash collatz_conjecture.sh 1
    assert_success
    assert_output "0"
}

@test "divide if even" {
    run bash collatz_conjecture.sh 16
    assert_success
    assert_output "4"
}

@test "even and odd steps" {
    run bash collatz_conjecture.sh 12
    assert_success
    assert_output "9"
}

@test "large number of even and odd steps" {
    run bash collatz_conjecture.sh 1000000
    assert_success
    assert_output "152"
}

@test "zero is an error" {
    run bash collatz_conjecture.sh 0
    assert_failure
    assert_output "Error: Only positive numbers are allowed"
}

@test "negative value is an error" {
    run bash collatz_conjecture.sh -15
    assert_failure
    assert_output "Error: Only positive numbers are allowed"
}
