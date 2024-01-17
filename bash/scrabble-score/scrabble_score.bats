#!/usr/bin/env bats
load bats-extra

# local version: 1.1.0.0

@test 'lowercase letter' {
    run bash scrabble_score.sh 'a'

    assert_success
    assert_output "1"
}

@test 'uppercase letter' {
    run bash scrabble_score.sh 'A'

    assert_success
    assert_output "1"
}

@test 'valuable letter' {
    run bash scrabble_score.sh 'f'

    assert_success
    assert_output "4"
}

@test 'short word' {
    run bash scrabble_score.sh 'at'

    assert_success
    assert_output "2"
}

@test 'short, valuable word' {
    run bash scrabble_score.sh 'zoo'

    assert_success
    assert_output "12"
}

@test 'medium word' {
    run bash scrabble_score.sh 'street'

    assert_success
    assert_output "6"
}

@test 'medium, valuable word' {
    run bash scrabble_score.sh 'quirky'

    assert_success
    assert_output "22"
}

@test 'long, mixed-case word' {
    run bash scrabble_score.sh 'OxyphenButazone'

    assert_success
    assert_output "41"
}

@test 'english-like word' {
    run bash scrabble_score.sh 'pinata'

    assert_success
    assert_output "8"
}

@test 'empty input' {
    run bash scrabble_score.sh ''

    assert_success
    assert_output "0"
}

@test 'entire alphabet available' {
    run bash scrabble_score.sh 'abcdefghijklmnopqrstuvwxyz'

    assert_success
    assert_output "87"
}
