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

1.upto(target) do |i|
  grid[i] = [@x, @y]
  update_direction
  move
end

p(grid[target])
p(grid[target].map(&:abs).sum)
