Class {
	#name : #Minesweeper,
	#superclass : #Object,
	#category : #'Exercise@Minesweeper'
}

{ #category : #'as yet unclassified' }
Minesweeper >> annotateMinefield: aCollection [
	| result |
	result := aCollection deepCopy.
	result withIndexDo: [ :row :i | 
		row withIndexDo: [ :each :j | 
			each isSpaceSeparator ifTrue: [ 
				| count |
				count := ((i @ j) eightNeighbors select: [ :point | 
					(point x between: 1 and: result size) and: [ point y between: 1 and: row size ]])
					count: [ :point | ((result at: point x) at: point y) = $* ].
				count > 0 ifTrue: [ row at: j put: count asCharacterDigit ]]]].
	^ result
]
