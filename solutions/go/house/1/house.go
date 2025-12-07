package house

import "strings"

var parts = []struct {
	subject string
	verb    string
}{
	{subject: "the house that Jack built.", verb: ""},
	{subject: "the malt", verb: "that lay in"},
	{subject: "the rat", verb: "that ate"},
	{subject: "the cat", verb: "that killed"},
	{subject: "the dog", verb: "that worried"},
	{subject: "the cow with the crumpled horn", verb: "that tossed"},
	{subject: "the maiden all forlorn", verb: "that milked"},
	{subject: "the man all tattered and torn", verb: "that kissed"},
	{subject: "the priest all shaven and shorn", verb: "that married"},
	{subject: "the rooster that crowed in the morn", verb: "that woke"},
	{subject: "the farmer sowing his corn", verb: "that kept"},
	{subject: "the horse and the hound and the horn", verb: "that belonged to"},
}

func Verse(v int) string {
	result := []string{}
	result = append(result, "This is "+parts[v-1].subject)

	for i := v - 2; i >= 0; i-- {
		result = append(result, parts[i+1].verb+" "+parts[i].subject)
	}
	return strings.Join(result, "\n")
}

func Song() string {
	result := []string{}
	for i := 1; i <= len(parts); i++ {
		result = append(result, Verse(i))
	}
	return strings.Join(result, "\n\n")
}
