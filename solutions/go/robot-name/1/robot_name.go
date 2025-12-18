package robotname

import "math/rand"

type Robot struct {
	name string
}

var usedNames = map[string]bool{}

func (r *Robot) Name() (string, error) {
	if r.name != "" {
		return r.name, nil
	}
	r.name = generateRandomName()
	for usedNames[r.name] {
		r.name = generateRandomName()
	}
	usedNames[r.name] = true
	return r.name, nil
}

func (r *Robot) Reset() {
	if r.name != "" {
		delete(usedNames, r.name)
		r.name = ""
	}
}

func generateRandomName() string {
	name := []rune{}
	for i := 0; i < 2; i++ {
		name = append(name, 'A'+rune(rand.Intn(26)))
	}
	for i := 0; i < 3; i++ {
		name = append(name, '0'+rune(rand.Intn(10)))
	}
	return string(name)
}
