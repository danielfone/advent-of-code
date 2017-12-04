// import { sum, absolute } from 'util'
const { sum } = require('./util.js')

const shouldChangeDirection = (x, y) =>
  x === y || (x < 0 && x === -y) || (x > 0 && x === 1 - y)

const changeDirection = (dx, dy) => [-dy, dx]
const newPosition = (x, y, dx, dy) => [x + dx, y + dy]

const target = 368078

const grid = {}

// spiral alogorithm https://stackoverflow.com/a/398302/1848
let [x, y] = [0, 0]
let [dx, dy] = [0, -1]

for (let i = 1; i <= target; i++) {
  grid[i] = [x, y]
  if (shouldChangeDirection(x, y)) {
    [dx, dy] = changeDirection(dx, dy)
  }
  [x, y] = newPosition(x, y, dx, dy)
}

console.log(grid[target])
console.log(grid[target].map(Math.abs).reduce(sum))

/*
## Part 2

@x = @y = 0
@dx = 0
@dy = -1

def neighbours(x,y, grid:)
  neighbour_coords = [x+1, x, x-1].product([y-1, y, y+1]) - [x,y]
  grid.values_at(*neighbour_coords).compact
end

1.upto(target) do |i|
  grid[[@x, @y]] = sum = neighbours(@x, @y, grid: grid).sum
  grid[[@x, @y]] = 1 if sum.zero?
  p(sum)
  p(sum) and break if sum > target
  update_direction
  move
end
*/
