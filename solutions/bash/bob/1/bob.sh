#!/usr/bin/env bash

message="$1"
message="${message#"${message%%[![:space:]]*}"}"
message="${message%"${message##*[![:space:]]}"}"

if [[ -z "$message" ]]; then
	echo "Fine. Be that way!"
	exit 0
fi
if [[ ! "$message" =~ [a-z] ]] && [[ "$message" =~ [A-Z] ]]; then
	if [[ "$message" =~ \?$ ]]; then
		echo "Calm down, I know what I'm doing!"
		exit 0
	fi
	echo "Whoa, chill out!"
	exit 0
fi
if [[ "$message" =~ \?$ ]]; then
	echo "Sure."
	exit 0
fi
echo "Whatever."
