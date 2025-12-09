package clock

import "fmt"

type Clock struct {
	hours   int
	minutes int
}

func normalize(h, m int) Clock {
	totalMinutes := h*60 + m
	totalMinutes = ((totalMinutes % (24 * 60)) + 24*60) % (24 * 60)
	hours := totalMinutes / 60
	minutes := totalMinutes % 60
	return Clock{hours, minutes}
}

func New(h, m int) Clock {
	return normalize(h, m)
}

func (c Clock) Add(m int) Clock {
	return normalize(c.hours, c.minutes+m)
}

func (c Clock) Subtract(m int) Clock {
	return normalize(c.hours, c.minutes-m)
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hours, c.minutes)
}
