package clock

import "fmt"

type Clock int

const minutesPerDay = 24 * 60

func normalize(m int) Clock {
	m %= minutesPerDay
	if m < 0 {
		m += minutesPerDay
	}
	return Clock(m)
}

func New(h, m int) Clock {
	return normalize(h*60 + m)
}

func (c Clock) Add(m int) Clock {
	return normalize(int(c) + m)
}

func (c Clock) Subtract(m int) Clock {
	return normalize(int(c) - m)
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", int(c)/60, int(c)%60)
}
