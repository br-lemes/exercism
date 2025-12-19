package phonenumber

import (
	"errors"
	"fmt"
)

func Number(phoneNumber string) (string, error) {
	return clean(phoneNumber)
}

func AreaCode(phoneNumber string) (string, error) {
	clean, err := clean(phoneNumber)
	if err != nil {
		return "", err
	}
	return clean[:3], nil
}

func Format(phoneNumber string) (string, error) {
	clean, err := clean(phoneNumber)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("(%s) %s-%s", clean[:3], clean[3:6], clean[6:]), nil
}

func clean(phoneNumber string) (string, error) {
	number := []rune{}
	for _, c := range phoneNumber {
		if c >= '0' && c <= '9' {
			number = append(number, c)
		}
	}
	length := len(number)
	if length == 11 {
		if number[0] != '1' {
			return "", errors.New("invalid number")
		}
		number = number[1:]
	}
	if length < 10 || length > 11 {
		return "", errors.New("invalid number")
	}
	if number[0] == '0' || number[0] == '1' {
		return "", errors.New("invalid number")
	}
	if number[3] == '0' || number[3] == '1' {
		return "", errors.New("invalid number")
	}
	return string(number), nil
}
