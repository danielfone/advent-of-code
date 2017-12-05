const fs = require('fs')

const lines = fs.readFileSync('./in.txt', 'utf-8').trim().split('\n')

const test = [0, 3, 0, 1, -3]

// Part 1
const isOutside = (pos, jumps) => pos < 0 || pos >= jumps.length

function steps (jumps, adjustment) {
  const newJumps = jumps.map(jump => parseInt(jump, 10))

  let count = 0
  for (let pos = 0; !isOutside(pos, jumps); count++) {
    const jump = newJumps[pos]
    newJumps[pos] = adjustment(jump)
    pos += jump
  }
  return count
}

const increment = (jump) => jump + 1

// Part 2
const flipFlop = (jump) => jump > 2 ? jump - 1 : jump + 1

console.log(
  'Test:',
  steps(test, increment)
)

console.log(
  'Part 1:',
  steps(lines, increment)
)

console.log(
  'Part 2:',
  steps(lines, flipFlop)
)
