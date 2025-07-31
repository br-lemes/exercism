#!/usr/bin/env bash

text="$1"
shift="$2"
result=""

for (( i=0; i<${#text}; i++ )); do
	char="${text:i:1}"
	if [[ "$char" =~ [a-z] ]]; then
		base=97
		char_code=$(printf "%d" "'$char")
		new_char_code=$(( (char_code - base + shift) % 26 + base ))
		result+=$(printf "\\$(printf '%03o' "$new_char_code")")
		continue;
	fi
	if [[ "$char" =~ [A-Z] ]]; then
		base=65
		char_code=$(printf "%d" "'$char")
		new_char_code=$(( (char_code - base + shift) % 26 + base ))
		result+=$(printf "\\$(printf '%03o' "$new_char_code")")
		continue;
	fi
	result+="$char"
done

echo "$result"
