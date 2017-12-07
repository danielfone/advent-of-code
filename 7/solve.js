function solve (input) {
  const lines = input.trim().split("\n")
  let parents = {}
  for (const line of lines) {
    const [parent, children] = parseLine(line)
    for (const child of children) parents[child] = parent
  }
  let currParent = Object.keys(parents)[0]
  while (parents[currParent]) currParent = parents[currParent]
  return currParent
}

function parseLine (line) {
  const [, parent, , childList] = /(\w+) \(\d+\)( -> (.*))?/.exec(line)
  const children = childList ? childList.split(', ') : []
  return [parent, children]
}

const fs = require('fs')
const lines = fs.readFileSync('./in.txt', 'utf-8').trim()

console.log(
  'Test:',
  solve(fs.readFileSync('./test.txt', 'utf-8').trim())
)

console.log(
  'Part 1:',
  solve(lines)
)
