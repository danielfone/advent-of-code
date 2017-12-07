// http://adventofcode.com/2017/day/6
function solve (input) {
  let prevIds = new Set()
  let newBank = input.slice(0)
  while (!prevIds.has(String(newBank))) {
    prevIds.add(String(newBank))
    newBank = reallocate(newBank)
  }
  return prevIds.size
}

function reallocate (banks) {
  let extraBlocks = banks.reduce((a, b) => Math.max(a, b))
  const maxBank = banks.indexOf(extraBlocks)
  let newBanks = banks.slice(0)
  newBanks[maxBank] = 0
  let currBank = maxBank + 1
  while (extraBlocks > 0) {
    extraBlocks--
    newBanks[currBank++ % newBanks.length] += 1
  }
  return newBanks
}

const test = [0, 2, 7, 0]
const input = [11, 11, 13, 7, 0, 15, 5, 5, 4, 4, 1, 1, 7, 1, 15, 11]

console.log(solve(test))
console.log(solve(input))
