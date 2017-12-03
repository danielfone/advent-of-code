target = 368078

grid = {}

# spiral alogorithm https://stackoverflow.com/a/398302/1848
@x = @y = 0
@dx = 0
@dy = -1

def change_direction?
  @x == @y || (@x < 0 && @x == -@y) || (@x > 0 && @x == 1-@y)
end

def update_direction
  @dx, @dy = -@dy, @dx if change_direction?
end

def move
  @x += @dx
  @y += @dy
end

## Part 1

1.upto(target) do |i|
  grid[i] = [@x, @y]
  update_direction
  move
end

p(grid[target])
p(grid[target].map(&:abs).sum)

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
