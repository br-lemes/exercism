package gigasecond

import "time"

func AddGigasecond(t time.Time) time.Time {
	const gigasecond = 1e9
	return t.Add(time.Duration(gigasecond) * time.Second)
}
