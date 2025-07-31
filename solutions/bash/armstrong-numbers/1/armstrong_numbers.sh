#!/usr/bin/env bash

num=$1
len=${#num}
sum=0

for ((i = 0; i < $len; i++)); do
	digit="${num:$i:1}"
	sum=$((sum + digit ** len))
done

if [ $sum -eq $num ]; then
	echo "true"
	exit 0
fi

echo "false"
