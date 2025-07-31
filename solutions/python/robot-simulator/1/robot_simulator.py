EAST = 'east'
NORTH = 'north'
WEST = 'west'
SOUTH = 'south'

class Robot:
    def __init__(self, direction=NORTH, x_pos=0, y_pos=0):
        self._direction = direction
        self._coordinates = (x_pos, y_pos)

    @property
    def direction(self):
        return self._direction

    @property
    def coordinates(self):
        return self._coordinates

    def move(self, instructions):
        for instruction in instructions:
            match instruction:
                case 'L':
                    self.turn_left()
                case 'R':
                    self.turn_right()
                case 'A':
                    self.advance()

    def turn_left(self):
        directions = [NORTH, WEST, SOUTH, EAST]
        index = directions.index(self._direction)
        self._direction = directions[(index + 1) % 4]

    def turn_right(self):
        directions = [NORTH, EAST, SOUTH, WEST]
        index = directions.index(self._direction)
        self._direction = directions[(index + 1) % 4]

    def advance(self):
        x, y = self._coordinates
        match self.direction:
            case 'north':
                y += 1
            case 'east':
                x += 1
            case 'south':
                y -= 1
            case 'west':
                x -= 1
        self._coordinates = (x, y)
