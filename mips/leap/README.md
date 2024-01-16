# Leap

Welcome to Leap on Exercism's MIPS Assembly Track.
If you need help running the tests or submitting your code, check out `HELP.md`.
If you get stuck on the exercise, check out `HINTS.md`, but try and solve it without using those first :)

## Instructions

Given a year, report if it is a leap year.

The tricky thing here is that a leap year in the Gregorian calendar occurs:

```text
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
```

For example, 1997 is not a leap year, but 1996 is.
1900 is not a leap year, but 2000 is.

## Notes

Though our exercise adopts some very simple rules, there is more to learn!

For a delightful, four minute explanation of the whole leap year phenomenon, go watch [this youtube video][video].

[video]: https://www.youtube.com/watch?v=xX96xng7sAE

## Registers

## Registers

| Register | Usage     | Type    | Description                                      |
| -------- | --------- | ------- | ------------------------------------------------ |
| `$a0`    | input     | integer | year to check                                    |
| `$v0`    | output    | boolean | input is leap year (`0` = `false`, `1` = `true`) |
| `$t0-9`  | temporary | any     | used for temporary storage                       |

## Source

### Created by

- @ozan

### Based on

CodeRanch Cattle Drive, Assignment 3 - https://coderanch.com/t/718816/Leap