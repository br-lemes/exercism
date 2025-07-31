Class {
	#name : #RomanNumerals,
	#superclass : #Object,
	#category : #'Exercise@RomanNumerals'
}

{ #category : #class }
RomanNumerals >> romanNumber: anInteger [ 
	|numeral result map|
	numeral := anInteger.
	result := ''.
	map := OrderedDictionary newFrom: {
		1000 -> 'M'.
		900 -> 'CM'.
		500 -> 'D'.
		400 -> 'CD'.
		100 -> 'C'.
		90 -> 'XC'.
		50 -> 'L'.
		40 -> 'XL'. 
		10 -> 'X'.
		9 -> 'IX'.
		5 -> 'V'.
		4 -> 'IV'.
		1 -> 'I'
	}.

	map keysAndValuesDo: [:int :roman |
		| count |
		count := numeral // int.
        count timesRepeat: [ result := result , roman ].
		numeral := numeral \\ int
    ].

	^result
]
