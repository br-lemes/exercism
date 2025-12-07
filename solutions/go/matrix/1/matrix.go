package matrix

import (
	"errors"
	"strconv"
	"strings"
)

type Matrix [][]int

func New(s string) (Matrix, error) {
	lines := strings.Split(s, "\n")
	result := make(Matrix, len(lines))
	for i, line := range lines {
		columns := strings.Split(strings.TrimSpace(line), " ")
		result[i] = make([]int, len(columns))
		for j, num := range columns {
			v, err := strconv.Atoi(num)
			if err != nil {
				return nil, err
			}
			result[i][j] = v
		}
	}
	return result, result.validate()
}

func (m Matrix) validate() error {
	length := 0
	for _, row := range m {
		if length == 0 {
			length = len(row)
		}
		if length != len(row) {
			return errors.New("invalid matrix")
		}
	}
	return nil
}

func (m Matrix) Cols() [][]int {
	cols := make([][]int, len(m[0]))
	for i := range cols {
		cols[i] = make([]int, len(m))
		for j := range cols[i] {
			cols[i][j] = m[j][i]
		}
	}
	return cols
}

func (m Matrix) Rows() [][]int {
	rows := make([][]int, len(m))
	for i := range rows {
		rows[i] = make([]int, len(m[0]))
		for j := range rows[i] {
			rows[i][j] = m[i][j]
		}
	}
	return rows
}

func (m Matrix) Set(row, col, val int) bool {
	if row < 0 || col < 0 || row >= len(m) || col >= len(m[0]) {
		return false
	}
	m[row][col] = val
	return true
}
